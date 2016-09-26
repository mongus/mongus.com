import React, {Component} from 'react';

require('../../css/dark.css');
import styles from './style.module.css';

const Header = props => (
    <div className={styles.header}>
        <div className={`${styles.title} glow`}>
            <div className={styles.name}>Aaron Porter</div>
            <div className={styles.company}>Mongus Solutions</div>
        </div>
    </div>
);

const thisYear = new Date().getFullYear();
const startYear = 2016 !== thisYear ? 2016 + '-' : '';

const Footer = props => (
    <div className={styles.footer}>
        Copyright &copy; {startYear}{thisYear} Mongus Solutions, LLC
    </div>
);

export default props => (
    <div className={styles.portfolio}>
        <Header/>
        <div className={styles.content}>
                {props.children}
        </div>
        <Footer/>
    </div>
);

export const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const ProjectHeading = props => {
    const {url, logoWrapper, logo, name, start, end, roles} = props.data;

    return (
        <div>
            <div className={styles.heading}>
                {logo && <a href={url} target='_blank' style={logoWrapper} className={styles.logoWrapper}><img src={logo} alt={name} className={styles.logo}/></a>}
                {(!logo && name) && <a href={url} target='_blank' className={styles.name}>{name}</a>}
                <div className={styles.date}>
                    {MONTHS[start.getMonth()]} {start.getFullYear()}
                    {' - '}
                    {end ? [MONTHS[end.getMonth()], end.getFullYear()].join(' ') : 'Present'}
                </div>
            </div>
            <div className={styles.roles}>
                Roles: {roles.map((role, i) => <div key={i} className={styles.role}>&nbsp;&nbsp;{role}{i + 1 < roles.length && ','}</div>)}
            </div>
        </div>
    );
};
