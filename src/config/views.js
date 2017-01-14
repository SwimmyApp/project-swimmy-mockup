import React from 'react';

//models
import { Route } from 'mobx-router';

//components
import Dashboard from '../components/dashboard';

const views = {
  dashboard: new Route({
    path: '/',
    component: <Dashboard />
  })
};
export default views;
