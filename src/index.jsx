import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import RootStore from './stores/RootStore';
import App from './App';

const rootStore = new RootStore();
//TODO: do we need a UI store? see: https://mobx.js.org/best/store.html

render(
  <AppContainer>
    <App rootStore={rootStore} />
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
