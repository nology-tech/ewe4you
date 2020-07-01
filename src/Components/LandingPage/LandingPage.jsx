import React, { Component } from 'react';
import styles from './LandingPage.module.scss';

class LandingPage extends Component {
  render() {
    return (
        <div className={styles.background}>
            <h1>Welcome to Ewe4You</h1>
            <h3>Teaching ewe about your mental wellbeing</h3> 
        </div>
    );
  }
}

export default LandingPage;