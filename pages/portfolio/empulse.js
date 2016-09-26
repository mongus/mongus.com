import React, {Component} from 'react';

import PortfolioPage, {ProjectHeading} from '../../component/PortfolioPage';
import Slider from '../../component/Slider';
import Technologies from '../../component/Technologies';

import slides from '../../portfolio-slides';

import styles from './style.module.css';

const data = {
    name: 'Empulse',
    start: new Date(2016, 0, 1),
    logo: require('../../images/empulse.png'),
    logoWrapper: {
        padding: 4,
        borderRadius: 4,
        backgroundColor: '#27aae2'
    },
    url: 'https://empulse.click',
    roles: ['Co-Founder', 'Architect', 'Frontend', 'Backend', 'Mobile', 'DBA'],
    description: [
        `Empulse provides new advertising opportunities for mobile apps. Products in images "shimmer" to attract
             the attention of users. When the user taps a product a label pops up showing the product name. Tapping
             the label will deep link into another app or open a browser to the product's page.`,

        `I was involved in every aspect of this project from concept through delivery. As the sole developer, I
             designed the system and created the database, iOS, Android, and JavaScript plugins, NodeJS endpoints and
             an admin control panel.`
    ],
    technologies: Technologies('ios', 'android', 'react', 'node', 'webpack', 'postgres', 'svg', 'aws')
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
