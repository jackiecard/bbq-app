import { combineReducers } from 'redux';
// rootReducers
import signup from './signupReducers';
import teste from './testeReducers';

export default combineReducers({
    signup: signup, teste: teste,
});
