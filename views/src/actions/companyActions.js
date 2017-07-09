import Axios from 'axios';
import * as errorActions from './errorsActions';
import { browserHistory } from 'react-router';

export const registerCompanySuccess = (company) => {
    return {
        type: 'REGISTER_SUCCESS',
        company
    }
}

export const registerCompany = (data) => {
    return (dispatch) => {
        return Axios.post('/api/companies', data)
            .then(response => {
                dispatch(registerCompanySuccess(response.data))
                browserHistory.push('/dashboard')
            })
            .catch(error =>{
                dispatch(errorActions.sendCompanyErrors(error.response.data))
                throw(error)
            });
    }
}
