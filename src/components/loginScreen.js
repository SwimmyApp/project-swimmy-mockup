import React from 'react';
import {observer} from 'mobx-react';
import views from '../config/views';

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
        <label name='email'>Email</label>
        <input type='text' name='email'/>
        <label name='email'>Password</label>
        <input type='password' name='password'/>
        <input type='submit' />
      </form>
    )
  }
}

export default observer(['store'], LoginScreen);
