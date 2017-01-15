import React from 'react';
import {observer} from 'mobx-react';
import views from '../config/views';
import styles from './styles/loginScreen.css';

class LoginScreen extends React.Component {
  handleOnSubmit(e) {
    e.preventDefault();

    const { store } = this.props;
    const {router: {goTo}} = store;
    goTo(views.dashboard);
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit.bind(this)} method='post'>
        <div className='form-group'>
          <input className={styles.input} type='text' name='email' placeholder='Email'/>
        </div>

        <div className='form-group'>
          <input className={styles.input}  type='password' name='password' placeholder='Password'/>
          <input className={styles.buttons} type='submit' value='Sign In' />
        </div>
      </form>
    )
  }
}

export default observer(['store'], LoginScreen);
