import Axios from 'axios';
import * as errorActions from './errorsActions';
import { browserHistory } from 'react-router';

export const addPurchaseSuccess = (item) => {
    return {
        type: 'ADD_PURCHASE',
        item
    }
}

export const removePurchaseSuccess = (item) => {
    return {
        type: 'REMOVE_PURCHASE',
        item
    }
}

export const addPurchase = (item) => {
    return (dispatch) => {
        return Axios.post('/api/items', item)
            .then(response => {
                dispatch(addPurchaseSuccess(response.data))
            })
            .catch(error =>{
                dispatch(errorActions.sendPurchaseErrors(error.response.data))
                throw(error)
            });
    }
}

export const removePurchase = (item) => {
    return (dispatch) => {
        return Axios.delete('/api/items', item)
            .then(response => {
                dispatch(addPurchaseSuccess(response.data))
            })
            .catch(error =>{
                dispatch(errorActions.sendPurchaseErrors(error.response.data))
                throw(error)
            });
    }
}
