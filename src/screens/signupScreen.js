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

class SignupScreen extends React.Component {
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
      <AppWrapper title='Welcome!' backButton>
        <div className={styles.container}>
        <form className='center-block' onSubmit={this.handleOnSubmit.bind(this)} method='post'>
          <input
            type='button'
            className={styles.buttons}
            style={css.facebook}
            value='Connect with Facebook'
          />
          <input
            type='text'
            placeholder='Enter your name'
          />
          <input
            type='email'
            placeholder='Enter your email address'
          />
          <input
            type='password'
            placeholder='Enter your Pa$$word123'
          />
          <input
            type='text'
            placeholder='Enter your phone number (Optional)'
          />
          <input
            type='checkbox'
            id='terms-conditions'
          />
          <label htmlFor='terms-conditions'>I agree to <a href='#' target='_blank'>terms and conditions</a></label>
          <input className={styles.buttons} style={css.submit} type='submit' value='Sign In'/>
        </form>
        </div>
        <nav className="navbar-fixed-bottom" style={css.footer}>
          <div className="container">
            <p>Already have an account? <a href='#' onClick={() => {goTo(views.login)}}>Sign in!</a></p>
          </div>
        </nav>
      </AppWrapper>
    )
  }
}

// Change to SignupScreen
export default observer(['store'], SignupScreen);
