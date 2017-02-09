import React from 'react';
import {observer} from 'mobx-react';
import views from '../config/views';
import * as styles from './styles/loginScreen.scss';
import AppWrapper from '../components/appWrapper'

const css = {
  form: {
    fontFamily: 'Montserrat, sans-serif',
    marginTop: '50%',
    textAlign: 'center'
  },
  facebook: {
    backgroundColor: '#388CF3',
    fontSize: '18px',
    fontWeight: '500'
  },
  submit: {
    fontSize: '18px',
    fontWeight: '500'
  },
  footer: {
    textAlign: 'center',
    borderTop: '1px solid #e8e8e8',
    padding: '20px',
    color: '#858585',
    fontWeight: '500'
  }
};

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
        <form className='center-block' style={css.form} onSubmit={this.handleOnSubmit.bind(this)} method='post'>
          <div className='form-group'>
            <h4>Welcome Back! Ready to Organize?</h4>
          </div>
          <div className='form-group'>
            <input className={styles.input} type='text' name='email' placeholder='Email'/>
          </div>
          <div className='form-group'>
            <input className={styles.input} type='password' name='password' placeholder='Password'/>
          </div>
          <input className={styles.buttons} style={css.submit} type='submit' value='Sign In'/>
          <input className={styles.buttons} style={css.facebook} type='submit'
                 value='Sign in with Facebook'/>
        </form>
        </div>
        <nav className="navbar-fixed-bottom" style={css.footer}>
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