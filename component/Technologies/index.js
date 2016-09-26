import React, {Component} from 'react';

import styles from './style.module.css';

function Tech(name, logo, url) {
    return i => (
        <a
            key={`${name}`}
            href={url}
            target='_blank'
            style={{ animationDelay: `${i*.1}s`}}
            className={styles.a}
        >
            <img
                src={logo}
                alt={name}
                title={name}
                className={styles.icon}
            />
        </a>
    );
}

const icons =  {
    react: Tech('React', require('../../images/react.svg'), 'https://facebook.github.io/react/'),
    redux: Tech('Redux', require('../../images/redux.svg'), 'http://redux.js.org/'),
    node: Tech('Node.js', require('../../images/nodejs.svg'), 'https://nodejs.org/'),
    postgres: Tech('PostgreSQL', require('../../images/postgresql.svg'), 'https://www.postgresql.org/'),
    ios: Tech('iOS', require('../../images/ios.svg'), 'https://www.apple.com'),
    android: Tech('Android', require('../../images/android.svg'), 'https://www.android.com/'),
    webpack: Tech('webpack', require('../../images/webpack.svg'), 'https://webpack.github.io/'),
    route53: Tech('AWS Route 53', require('../../images/route53.svg'), 'https://aws.amazon.com/route53/'),
    s3: Tech('AWS S3', require('../../images/s3.svg'), 'https://aws.amazon.com/s3/'),
    cloudfront: Tech('AWS CloudFront', require('../../images/cloudfront.svg'), 'https://aws.amazon.com/cloudfront/'),
    elasticBeanstalk: Tech('AWS Elastic Beanstalk', require('../../images/elastic-beanstalk.svg'), 'https://aws.amazon.com/elasticbeanstalk/'),
    rds: Tech('AWS RDS', require('../../images/rds.svg'), 'https://aws.amazon.com/rds/'),
    elasticache: Tech('AWS ElastiCache', require('../../images/elasticache.svg'), 'https://aws.amazon.com/elasticache/'),
    cloudformation: Tech('AWS CloudFormation', require('../../images/cloudformation.svg'), 'https://aws.amazon.com/cloudformation/'),
    ec2: Tech('AWS EC2', require('../../images/ec2.svg'), 'https://aws.amazon.com/ec2/'),
    redis: Tech('Redis', require('../../images/redis.svg'), 'http://redis.io/'),
    svg: Tech('SVG', require('../../images/svg.svg'), 'https://en.wikipedia.org/wiki/Scalable_Vector_Graphics'),
    stripe: Tech('Stripe', require('../../images/stripe.svg'), 'https://stripe.com'),
    php: Tech('PHP', require('../../images/php.svg'), 'http://www.php.net'),
    mysql: Tech('MySQL', require('../../images/mysql.svg'), 'https://www.mysql.com/'),
    aws: Tech('AWS', require('../../images/aws.svg'), 'https://aws.amazon.com/'),
    vagrant: Tech('Vagrant', require('../../images/vagrant.svg'), 'https://www.vagrantup.com/'),
    twilio: Tech('Twilio', require('../../images/twilio.svg'), 'https://www.twilio.com/'),
    graphql: Tech('GraphQL', require('../../images/graphql.svg'), 'http://graphql.org/'),
    relay: Tech('Relay', require('../../images/relay.svg'), 'https://facebook.github.io/relay/'),
    linux: Tech('Linux', require('../../images/linux.svg'), 'https://en.wikipedia.org/wiki/Linux'),
    letsencrypt: Tech(`Let's Encrypt`, require('../../images/letsencrypt.svg'), 'https://letsencrypt.org/'),
};

export default (...names) => <div className={styles.technologies}>{names.map((name, i) => icons[name](i))}</div>;