import React, { Component } from 'react';
import { observer } from 'mobx-react';

import BannerNav from './components/bannerNav';
import Dashboard from './components/dashboard';

import DevTools from 'mobx-react-devtools';

@observer
class App extends Component {

  render() {
    const {rootStore} = this.props;

    return (
      <main className="container-fluid">
        <BannerNav rootStore={rootStore}></BannerNav>
        <Dashboard rootStore={rootStore}></Dashboard>
      </main>
    );
  }
};

export default App;
