import React, {Component} from 'react';

import ResumePage, {ProjectHeading} from '../../component/ResumePage';
import Slider from '../../component/Slider';
import Technologies from '../../component/Technologies';

import slides from '../../resume-slides';

import styles from './resume.module.css';

const data = {
    name: 'KULT iD',
    start: new Date(2015, 9, 15),
    end: new Date(2015, 11, 15),
    logo: require('../../images/kult.png'),
    logoWrapper: {
        padding: '4px 6px 2px',
        borderRadius: 4,
        backgroundColor: '#000'
    },
    url: 'https://kultid.com/',
    roles: ['CTO', 'Mobile', 'Backend', 'DBA'],
    description: [
        `KULT iD was a social platform designed to promote products in posts and share revenue with users. Shortly
             after launching the primary investor sued the founder and the company disintegrated.`,
        `I came on board two weeks before launch to bring development in house. Inheriting the workload of a large
             external development company, I became the replacement for the DBA and many backend and mobile developers.
             Soon after launch the backend became unusably slow due to inherited poor design. I patched the
             backend and improved response time from over 30 seconds to under 2 seconds. I nearly completed a React
             Native version of the app for iOS and Android to replace the iOS app before the company closed its doors
             in mid December.`
    ],
    technologies: Technologies('react', 'ios', 'android', 'stripe', 'php', 'mysql', 'aws')
};

export default props => (
    <ResumePage>
        <Slider slides={slides} route={props.route}>
            <div className={styles.content}>
                <ProjectHeading data={data}/>
                {data.description.map((p, i) => <p key={i}>{p}</p>)}
                {data.technologies}
            </div>
        </Slider>
    </ResumePage>
);
