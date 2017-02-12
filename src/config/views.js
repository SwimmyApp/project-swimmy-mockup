import React from 'react';

//models
import { Route } from 'mobx-router';

//components
import SplashScreen from '../screens/splashScreen';
import LoginScreen from '../screens/loginScreen';
import Dashboard from '../screens/dashboard';
import IssuesScreen from '../screens/issuesScreen';
import SignupScreen from '../screens/signupScreen';

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
  }),
  issues: new Route({
    path: 'issues',
    component: <IssuesScreen />
  }),
  signup: new Route({
    path: 'signup',
    component: <SignupScreen />
  })
};

export default views;
