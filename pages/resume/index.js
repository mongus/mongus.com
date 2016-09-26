import React, {Component} from 'react';

import ResumePage from '../../component/ResumePage';
import Slider from '../../component/Slider';
import Technologies from '../../component/Technologies';

import slides from '../../resume-slides';

import styles from './resume.module.css';

const technologies = Technologies('react', 'redux', 'graphql', 'relay', 'node', 'ios', 'android', 'webpack', 'aws', 'postgres', 'mysql', 'redis', 'svg', 'stripe', 'twilio',
    'letsencrypt', 'linux');

export default props => (
    <ResumePage>
        <Slider slides={slides} route={props.route}>
            <div className={styles.content}>
                <p>
                    Hi! My name is Aaron Porter. I'm a software engineer specializing in full stack web and
                    mobile development. I've been running my consulting company, Mongus Solutions, since 2005
                    but I was developing for the web long before I started my own company.
                </p>
                <p>
                    I'm very passionate about the latest advances in web technologies. As a result my
                    architectural decisions are based on current best practices and the software I design
                    stays current longer. Additionally, my clients enjoy reduced time to market which is
                    critical in today's competitive global market.
                </p>
                <p>
                    Technologies I currently recommend and implement include:
                </p>
                {technologies}
            </div>
        </Slider>
    </ResumePage>
);
