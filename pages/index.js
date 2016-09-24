import React, {Component} from 'react'
import Helmet from "react-helmet"

import styles from './index.module.css';

export default class Index extends Component {
  render () {
    return (
      <div className={styles.page}>
        <Helmet
          title="Mongus Solutions"
        />
        <h1 className={styles.title}>
          Mongus Solutions
        </h1>
      </div>
    )
  }
}
