import React from 'react';

//models
import { Route } from 'mobx-router';

//components
import ActionsScreen from '../screens/actionsScreen';
import Dashboard from '../screens/dashboard';
import IssuesScreen from '../screens/issuesScreen';
import LoginScreen from '../screens/loginScreen';
import SignupScreen from '../screens/signupScreen';
import SplashScreen from '../screens/splashScreen';

const views = {
  actions: new Route({
    path: 'actions',
    component: <ActionsScreen />
  }),
  dashboard: new Route({
    path: 'dashboard',
    component: <Dashboard />
  }),
  home: new Route({
    path: '/',
    component: <SplashScreen />
  }),
  issues: new Route({
    path: 'issues',
    component: <IssuesScreen />
  }),
  login: new Route({
    path: 'login',
    component: <LoginScreen />
  }),
  signup: new Route({
    path: 'signup',
    component: <SignupScreen />
  })
};

export default views;
