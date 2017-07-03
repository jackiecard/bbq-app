import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducers from '../reducers';

export default function configureStore(initialState){
    return createStore(rootReducers, initialState,
        applyMiddleware(thunk, logger)
    )
}
