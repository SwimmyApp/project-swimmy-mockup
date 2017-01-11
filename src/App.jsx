import React, { Component } from 'react';
import { observer } from 'mobx-react';

import BannerNav from './components/bannerNav';
import Dashboard from './components/dashboard';

import DevTools from 'mobx-react-devtools';

@observer
class App extends Component {

  render() {
    const {userStore} = this.props;

    return (
      <main className="container-fluid">
        <BannerNav userStore={userStore}></BannerNav>
        <Dashboard userStore={userStore}></Dashboard>
      </main>
    );
  }
};

export default App;
