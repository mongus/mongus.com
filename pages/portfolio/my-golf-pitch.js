import React, {Component} from 'react';

import PortfolioPage, {ProjectHeading} from '../../component/PortfolioPage';
import Slider from '../../component/Slider';
import Technologies from '../../component/Technologies';

import slides from '../../portfolio-slides';

import styles from './style.module.css';

const data = {
    name: 'My Golf Pitch',
    start: new Date(2016, 0, 1),
    logo: require('../../images/mygolfpitch.png'),
    url: 'https://beta.mygolfpitch.com/',
    roles: ['Architect', 'Frontend', 'Backend', 'DBA'],
    description: [
        `My Golf Pitch is a crowdfunding platform for golf similar to Kickstarter or Indiegogo. This project
             features a WebSocket connection that pushes real time project updates out to all clients.`,
        `The requirements received for this site were "We want a crowdfunding platform for golf." My team was
             completely responsible for the design and implementation. As the sole developer I performed the majority
             of the work.`
    ],
    technologies: Technologies('react', 'redux', 'node', 'webpack', 'postgres', 'redis', 'stripe', 'aws')
};

export default props => (
    <PortfolioPage>
        <Slider slides={slides} route={props.route}>
            <div className={styles.content}>
                <ProjectHeading data={data}/>
                {data.description.map((p, i) => <p key={i}>{p}</p>)}
                {data.technologies}
            </div>
        </Slider>
    </PortfolioPage>
);
