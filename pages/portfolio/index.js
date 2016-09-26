import React, {Component} from 'react';

import PortfolioPage from '../../component/PortfolioPage';
import Slider from '../../component/Slider';
import Technologies from '../../component/Technologies';

import slides from '../../portfolio-slides';

import styles from './style.module.css';

const technologies = Technologies('react', 'redux', 'graphql', 'relay', 'node', 'ios', 'android', 'webpack', 'aws', 'postgres', 'mysql', 'redis', 'svg', 'stripe', 'twilio',
    'letsencrypt', 'linux');

export default props => (
    <PortfolioPage>
        <Slider slides={slides} route={props.route}>
            <div className={styles.content}>
                <p>
                    My goal is to help you define your next web or mobile app project. I will meet with you
                    in person to determine your direction and provide sound technical recommendations. I can
                    also provide development services if you're interested but your initial direction is more
                    important than implementation details. I've advised too many clients who have wasted
                    fortunes on app development that didn't fit their needs.
                </p>
                <p>
                    I'm very passionate about the latest advances in web technologies. As a result my
                    architectural decisions are based on current best practices and the software I design
                    stays current longer. Additionally, my clients enjoy reduced time to market which is
                    critical in today's competitive global market.
                </p>
                <p>
                    Technologies I often recommend and implement include:
                </p>
                {technologies}
            </div>
        </Slider>
    </PortfolioPage>
);
