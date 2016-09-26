import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';

import styles from './style.module.css';

// persists between instances
let last;

export default class Slider extends Component {
    constructor(props) {
        super(props);

        this.handleKeyDown = (...args) => this._handleKeyDown(...args);

        this.handleTouchStart = (...args) => this._handleTouchStart(...args);
        this.handleTouchMove = (...args) => this._handleTouchMove(...args);
        this.handleTouchEnd = (...args) => this._handleTouchEnd(...args);

        let direction = '';

        // make sure the last page was a resume page before sliding old content out
        if (last && Date.now() <= last.time + 100) {
            const {slides, route} = props;

            direction =  slides.indexOf(last.path) < slides.indexOf(route.path) ? 'rtl' : 'ltr';

            setTimeout(() => this.setState({last: null}), 500);
        }
        else
            last = null;

        this.state = {
            direction,
            last
        }
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
        last = {
            path: this.props.route.path,
            time: Date.now(),
            children: this.props.children,
            top: this.refs.slideContent.firstChild.offsetTop - window.scrollY
        };
    }

    previousSlide() {
        const {slides, route} = this.props;
        const i = slides.indexOf(route.path);
        const path = i > 0 && slides[i - 1];

        if (path)
            browserHistory.push(path);
    }

    nextSlide() {
        const {slides, route} = this.props;
        const i = slides.indexOf(route.path);
        const path = i < slides.length - 1 && slides[i + 1];

        if (path)
            browserHistory.push(path);
    }

    _handleKeyDown(e) {
        switch (e.key) {
            case 'ArrowLeft':
                this.previousSlide();
                break;
            case 'ArrowRight':
                this.nextSlide();
                break;
        }
    }

    _handleTouchStart(e) {
        const touch = e.touches[0];

        this.touch = {
            x: touch.pageX,
            y: touch.pageY
        };
    }

    _handleTouchMove(e) {
        if (!this.touch || e.touches.length > 1 || (e.scale && e.scale !== 1))
            return;

        const touch = e.touches[0];

        const dx = Math.abs(this.touch.x - touch.pageX);
        const dy = Math.abs(this.touch.y - touch.pageY);

        if (dx < dy) {
            this.touch = null;
            return;
        }

        if (dx < 30 || dx / 4 < dy)
            return;

        if (this.touch.x > touch.pageX)
            this.nextSlide();
        else
            this.previousSlide();

        this.touch = null;
    }

    _handleTouchEnd() {
        this.touch = null;
    }

    render() {
        const {direction, last} = this.state;

        const {slides, route} = this.props;

        const i = slides.indexOf(route.path);

        const previous = i > 0 && slides[i - 1];
        const next = i < slides.length - 1 && slides[i + 1];

        const transition = last;

        return (
            <div className={[styles.slider, styles[direction]].join(' ')}
                 onTouchStart={this.handleTouchStart}
                 onTouchMove={this.handleTouchMove}
                 onTouchEnd={this.handleTouchEnd}
                 onTouchCancel={this.handleTouchEnd}
            >
                <Link to={previous || null}
                      style={{left: transition || !previous ? -30 : 2}}
                      className={[styles.arrow, styles.left].join(' ')}
                >
                    <svg viewBox="0 0 3 6" className={styles.arrowSvg}>
                        <path d="M3,2 L2,2 L2,0 L0,3 L2,6 L2,4 L3,4 Z" className="arrow"/>
                    </svg>
                </Link>
                <div className={styles.slide}>
                    <div className={styles.slideContent} ref="slideContent">{this.props.children}</div>
                    {last && <div className="remove" style={{top:last.top}}>{last.children}</div>}
                </div>
                <Link to={next || null}
                      style={{right: transition || !next ? -30 : 2}}
                      className={[styles.arrow, styles.right].join(' ')}
                >
                    <svg viewBox="0 0 3 6" className={styles.arrowSvg}>
                        <path d="M0,2 L1,2 L1,0 L3,3 L1,6 L1,4 L0,4 Z" className="arrow"/>
                    </svg>
                </Link>
            </div>
        );
    }
}