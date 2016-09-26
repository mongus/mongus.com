import React, {Component} from 'react'
import Helmet from "react-helmet"

require('../css/dark.css');
import styles from './index.module.css';

export default class Index extends Component {
  render () {
    return (
      <div className={styles.page}>
        <Helmet
          title="Mongus Solutions"
        />
        <h1 className={`${styles.title} glow`}>
          Mongus Solutions
        </h1>
      </div>
    )
  }
}
