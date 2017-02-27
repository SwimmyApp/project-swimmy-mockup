// Placeholder Page for Organization Signup
import React from 'react';
import {observer} from 'mobx-react';
import views from '../config/views';
import * as styles from './styles/signupScreens.scss';
import AppWrapper from '../components/appWrapper'

const css = {
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
    padding: '15px',
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
          <div className='form-group'>
            <input
              className={styles.input}
              type='text'
              placeholder='Organization Name'
            />
          </div>
          <div className='form-group'>
            <input
              className={styles.input}
              type='text'
              placeholder='Contact Name'
            />
          </div>
          <div className='form-group'>
            <input
              className={styles.input}
              type='email'
              placeholder='Contact email address'
            />
          </div>
          <div className='form-group'>
            <input
              className={styles.input}
              type='password'
              placeholder='Enter Pa$$word123'
            />
          </div>
          <div className='form-group'>
            <input
              className={styles.input}
              type='text'
              placeholder='Enter contact phone number (Optional)'
            />
          </div>
          <div className='checkbox'>
            <label>
              <input type='checkbox' id='terms-conditions'/>
               I agree to <a href='#' target='_blank'>terms and conditions</a>
            </label>
          </div>
          <input 
            className={styles.buttons} 
            style={css.submit} 
            type='submit' 
            value='Sign Up'
          />
          <input
              type='button'
              className={styles.buttons}
              style={css.facebook}
              value='Connect with Facebook'
          />
        </form>
        </div>
        <nav className="navbar-fixed-bottom" style={css.footer}>
          <div className="container">
            <p>Already have an account? <a href='#' onClick={() => {goTo(views.login)}}>Log in!</a></p>
          </div>
        </nav>
      </AppWrapper>
    )
  }
}

// Change to SignupScreen
export default observer(['store'], SignupScreen);
