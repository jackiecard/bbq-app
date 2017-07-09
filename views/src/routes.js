import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

import App from './components/App';
import LoginPage from './components/Login/LoginPage';
import SignupPage from './components/Login/SignupPage';
import DashboardPage from './components/Dashboard/DashboardPage';
import RegisterPage from './components/Dashboard/RegisterCompanyPage';
import MyAccountPage from './components/Dashboard/MyAccountPage';
import PurchasePage from './components/Dashboard/NewPurchasePage';

export default (

    <Router history={ browserHistory } >
        <Route path="/" component={ App }>
            <IndexRoute component={ LoginPage }/>
            <Route path="/signup" component={ SignupPage }></Route>
            <Route path="/dashboard" component={ DashboardPage }></Route>
            <Route path="/register" component={ RegisterPage }></Route>
            <Route path="/myaccount" component={ MyAccountPage }></Route>
            <Route path="/purchase" component={ PurchasePage }></Route>
        </Route>
    </Router>
);
