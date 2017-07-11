import Axios from 'axios';
import * as errorActions from './errorsActions';
import { browserHistory } from 'react-router';

export const addPurchaseSuccess = (purchase) => {
    return {
        type: 'ADD_PURCHASE_SUCCESS',
        purchase
    }
}

export const addPurchase = (data) => {
    return (dispatch) => {
        return Axios.post('/api/purchased', data)
            .then(response => {
                dispatch(addPurchaseSuccess(response.data))
                browserHistory.push('/dashboard')
            })
            .catch(error =>{
                dispatch(errorActions.sendCompanyErrors(error.response.data))
                throw(error)
            });
    }
}
