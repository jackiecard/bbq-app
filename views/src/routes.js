import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

import App from './components/App';
import LoginPage from './components/Login/LoginPage';
import SignupPage from './components/Login/SignupPage';
import DashboardPage from './components/Dashboard/DashboardPage';

export default (

    <Router history={ browserHistory } >
        <Route path="/" component={ App }>
            <IndexRoute component={ LoginPage }/>
            <Route path="/signup" component={ SignupPage }></Route>
            <Route path="/dashboard" component={ DashboardPage }></Route>
        </Route>
    </Router>
);
