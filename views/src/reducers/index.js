import { combineReducers } from 'redux';
// rootReducers
import signup from './signupReducers';
import login from './loginReducers';
import company from './companyReducers';
import errors from './errorsReducers';

export default combineReducers({
    signup: signup, errors: errors, login: login, company: company,
});
