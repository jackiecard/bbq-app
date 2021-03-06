
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
// actions

import configureStore from './store/configureStore';

const store = configureStore();
// setar valores qnd a pagina carrega


render(
    <Provider store={ store }>
        <Router routes={ routes } history={ browserHistory } />
    </Provider>,

    document.getElementById('app')
)
