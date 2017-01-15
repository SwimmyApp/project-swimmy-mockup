import React from 'react';

//models
import { Route } from 'mobx-router';

//components
import SplashScreen from '../screens/splashScreen';
import LoginScreen from '../screens/loginScreen';
import Dashboard from '../screens/dashboard';

const views = {
  home: new Route({
    path: '/',
    component: <SplashScreen />
  }),
  dashboard: new Route({
    path: 'dashboard',
    component: <Dashboard />
  }),
  login: new Route({
    path: 'login',
    component: <LoginScreen />
  })
};
export default views;
