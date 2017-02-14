import React from 'react';
import {observer} from 'mobx-react';
import views from '../config/views';
import classNames from 'classnames';
import * as styles from './styles/loginScreen.scss';
import AppWrapper from '../components/appWrapper'

class LoginScreen extends React.Component {
  handleOnSubmit(e) {
    e.preventDefault();
    const {store} = this.props;
    const {router: {goTo}} = store;
    goTo(views.issues);
  }

  render() {
    const {store} = this.props;
    const {router: {goTo}} = store;

    return (
      <AppWrapper title='Login' backButton>
        <div className={styles.container}>
        <form className={classNames(styles.form, 'center-block')} onSubmit={this.handleOnSubmit.bind(this)} method='post'>
          <div className='form-group'>
            <h4>Welcome back! Ready to organize?</h4>
          </div>
          <div className='form-group'>
            <input className={styles.input} type='text' name='email' placeholder='Email'/>
          </div>
          <div className='form-group'>
            <input className={styles.input} type='password' name='password' placeholder='Password'/>
          </div>
          <input className={styles.submit} type='submit' value='Sign In'/>
          <input className={styles.facebook} type='submit'
                 value='Sign in with Facebook'/>
        </form>
        </div>
        <nav className={classNames(styles.footer, 'navbar-fixed-bottom')}>
          <div className="container">
            <p>Don't have an account? <a href='#' onClick={() => {goTo(views.dashboard)}}>Sign up!</a></p>
          </div>
        </nav>
      </AppWrapper>
    )
  }
}
export default observer(['store'], LoginScreen);

// TODO: Hook sign-up link to sign-up screen