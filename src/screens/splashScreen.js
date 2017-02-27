import React from 'react';
import {observer} from 'mobx-react';
import views from '../config/views';
import AppWrapper from '../components/appWrapper'
import * as styles from './styles/splashScreenStyles.scss';

class SplashScreen extends React.Component {
  render() {
    const { store } = this.props;
    const {router: {goTo}} = store;
    return (
      <AppWrapper title='Swimmy'>
        <div className={styles.logoPlaceholder}>
          <div className={styles.fishies} />
        </div>
        <div className={styles.content}>
          <div>
            <h3>Project Swimmy</h3>
            <ol>
              <li>Meet local organizing activists</li>
              <li>Unite for collective action</li>
              <li>Win for progressive change</li>
            </ol>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={styles.buttons}
            onClick={() => {goTo(views.signup)}}>I'm a new volunteer</button>
          <button
            className={styles.buttons}
            onClick={() => {goTo(views.orgSignup)}}>I'm a new organization</button>
        </div>
        <nav className={"navbar-fixed-bottom " + styles.footer}>
          <div className="container">
            <p>Already have an account?
            <a href='#' onClick={() => {goTo(views.login)}}> Log in!</a>
            </p>
          </div>
        </nav>
      </AppWrapper>
    )
  }
}

export default observer(['store'], SplashScreen);

// TODO: Footer nav should be turned into a component once design is finalized.