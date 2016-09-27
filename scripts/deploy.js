const fs =require('fs');
const mime = require('mime-types');
const AWS = require('aws-sdk');

const s3 = new AWS.S3();
const cloudfront = new AWS.CloudFront();

function getFiles (dir, files_){
    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files){
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()){
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
    }
    return files_;
}

const list = getFiles('./public').map(file => ({
    path: file,
    key: file.replace(/.*public\//, '').replace(/\/index.html$/, '/')
}));

list.forEach(file => {
    console.log(`Uploading ${file.path} to ${file.key}`);

    s3.putObject({
        Bucket: process.env.AWS_BUCKET,
        Key: file.key,
        Body: fs.readFileSync(file.path),
        ContentType: mime.lookup(file.path)
    }, err => {
        if (err)
            console.error(err);
    });
});

const keys = list.map(file => `/${file.key}`);

cloudfront.createInvalidation({
    DistributionId: process.env.AWS_CLOUDFRONT_ID,
    InvalidationBatch: {
        CallerReference: Number(Date.now()).toString(36),
        Paths: {
            Quantity: keys.length,
            Items: keys
        }
    }
}, err => {
    if (err)
        console.log(err);
});
