import Axios from 'axios';
import * as errorActions from './errorsActions';
import { browserHistory } from 'react-router';

export const signupUserSuccess = (signup) => {
    return {
        type: 'SIGNUP_SUCCESS',
        signup
    }
}

export const signupUser = (data) => {
    return (dispatch) => {
        return Axios.post('/api/signup', data)
            .then(response => {
                dispatch(signupUserSuccess(response.data))
                browserHistory.push('/')
            })
            .catch(error =>{
                dispatch(errorActions.sendSignupErrors(error.response.data))
                throw(error)
            });
    }
}
