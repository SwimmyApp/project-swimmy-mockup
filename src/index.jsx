import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import UserStore from './stores/UserStore';
import App from './App';

const userStore = new UserStore();

render(
  <AppContainer>
    <App userStore={userStore} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;

    render(
      <AppContainer>
        <NextApp userStore={userStore} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
