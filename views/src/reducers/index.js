import { combineReducers } from 'redux';
// rootReducers
import signup from './signupReducers';
import login from './loginReducers';
import errors from './errorsReducers';

export default combineReducers({
    signup: signup, errors: errors, login: login
});
