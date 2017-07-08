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
                console.log(response.data)
                dispatch(signupUserSuccess(response.data))
                browserHistory.push('/')
            })
            .catch(error =>{
                console.log(error.response.data)
                dispatch(errorActions.sendSignupErrors(error.response.data))
                throw(error)
            });
    }
}
