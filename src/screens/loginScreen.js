import React from 'react';
import {observer} from 'mobx-react';
import views from '../config/views';
import styles from './styles/loginScreen.css';
import AppWrapper from '../components/appWrapper'

class LoginScreen extends React.Component {
  handleOnSubmit(e) {
    e.preventDefault();

    const { store } = this.props;
    const {router: {goTo}} = store;
    goTo(views.issues);
  }

  render() {
    return (
      <AppWrapper title='Login' backButton>
        <form className={styles.container} onSubmit={this.handleOnSubmit.bind(this)} method='post'>
          <div className='form-group'>
            <input className={styles.input} type='text' name='email' placeholder='Email'/>
          </div>

          <div className='form-group'>
            <input className={styles.input}  type='password' name='password' placeholder='Password'/>
            <input className={styles.buttons} type='submit' value='Sign In' />
          </div>
        </form>
      </AppWrapper>
    )
  }
}

export default observer(['store'], LoginScreen);
