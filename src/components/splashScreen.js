import React from 'react';
import {observer} from 'mobx-react';
import views from '../config/views';

class SplashScreen extends React.Component {
  render() {
    const { store } = this.props;
    const {router: {goTo}} = store;

    return (
      <button onClick={() => {goTo(views.login)}}>Hello</button>
    )
  }
}

export default observer(['store'], SplashScreen);
