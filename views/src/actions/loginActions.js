import Axios from 'axios';
import * as errorActions from './errorsActions';
import { browserHistory } from 'react-router';

export const loginSuccess = (login) => {
    return {
        type: 'LOGIN_SUCCESS',
        login
    }
}
export const accountChanged = (login) => {
    return {
        type: 'ACCOUNT_CHANGED_SUCCESS',
        login
    }
}

export const login = (data) => {
    return (dispatch) => {
        return Axios.post('/api/login', data)
            .then(response => {
                dispatch(loginSuccess(response.data))
                browserHistory.push('/dashboard')
            })
            .catch(error =>{
                dispatch(errorActions.sendLoginErrors(error.response.data))
                throw(error)
            });
    }
}

export const changeAccountSettings = (data) => {
    return (dispatch) => {
        return Axios.put('/api/login/' + data.id, data.params)
            .then(response => {
                dispatch(accountChanged(response.data))
                browserHistory.push('/dashboard')
            })
            .catch(error =>{
                console.log(error)
                dispatch(errorActions.sendLoginErrors(error.response.data))
                throw(error)
            });
    }
}
