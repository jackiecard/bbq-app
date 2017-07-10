import Axios from 'axios';
import * as errorActions from './errorsActions';
import { browserHistory } from 'react-router';

export const addItemSuccess = (item) => {
    return {
        type: 'ADD_ITEM',
        item
    }
}

export const removeItemSuccess = (item) => {
    return {
        type: 'REMOVE_ITEM',
        item
    }
}

export const addItem = (item) => {
    return (dispatch) => {
        return Axios.post('/api/items', item)
            .then(response => {
                dispatch(addItemSuccess(response.data))
            })
            .catch(error =>{
                dispatch(errorActions.sendItemErrors(error.response.data))
                throw(error)
            });
    }
}

export const removeItem = (item) => {
    return (dispatch) => {
        return dispatch(removeItemSuccess(item))
    }
}
