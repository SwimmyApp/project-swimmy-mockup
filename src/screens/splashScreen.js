import React from 'react';
import {observer} from 'mobx-react';
import views from '../config/views';
import AppWrapper from '../components/appWrapper'
import styles from './styles/splashScreenStyles.css';

class SplashScreen extends React.Component {
  render() {
    const { store } = this.props;
    const {router: {goTo}} = store;

    return (
      <AppWrapper title='Swimmy'>
        <div className={styles.logoPlaceholder}>
          <p>Logo Placeholder</p>
        </div>

        <div className={styles.buttonContainer}>
          <button
            className={styles.buttons}
            onClick={() => {goTo(views.login)}}>I'm a new user</button>

          <button
            className={styles.buttons}
            onClick={() => {goTo(views.login)}}>I'm an organization</button>
        </div>
        <div>
          <p>Already have an account? <a href='#' onClick={() => {goTo(views.login)}}>Sign in</a></p>
        </div>
      </AppWrapper>
    )
  }
}

export default observer(['store'], SplashScreen);
