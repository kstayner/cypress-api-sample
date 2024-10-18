import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from '../components/pages/LoginPage';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/login" component={LoginPage} />
    </Switch>
  </Router>
);

export default Routes;
