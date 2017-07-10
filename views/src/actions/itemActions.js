import * as errorActions from './errorsActions';
import { browserHistory } from 'react-router';

export const addItemSuccess = (item) => {
    return {
        type: 'ADD_ITEM',
        item
    }
}

export const addItem = (item) => {
    return (dispatch) => {
        return dispatch(addItemSuccess(item))
    }
}
