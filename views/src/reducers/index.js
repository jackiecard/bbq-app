import { combineReducers } from 'redux';
// rootReducers
import signup from './signupReducers';

export default combineReducers({
    signup: signup
});
