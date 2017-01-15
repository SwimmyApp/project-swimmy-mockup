import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import RootStore from './stores/RootStore';
import App from './App';

import {Provider} from 'mobx-react';
import {MobxRouter, startRouter} from 'mobx-router';
import views from './config/views';

const store = new RootStore();
//TODO: do we need a UI store? see: https://mobx.js.org/best/store.html

startRouter(views, store)

render(
  <AppContainer store={store}>
    <Provider store={store}>
      <MobxRouter/>
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;

    render(
      <AppContainer>
        <NextApp rootStore={rootStore} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
