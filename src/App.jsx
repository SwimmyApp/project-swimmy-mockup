import React, { Component } from 'react';
import { observer } from 'mobx-react';

import {Provider} from 'mobx-react';
import {MobxRouter, startRouter} from 'mobx-router';
import views from './config/views';

import DevTools from 'mobx-react-devtools';

@observer
class App extends Component {

  render() {
    const {store} = this.props;
    startRouter(views, store);

    return (
      <Provider store={store}>
      	<MobxRouter/>
      </Provider>
    );
  }
};

export default App;
