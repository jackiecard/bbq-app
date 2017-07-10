import * as errorActions from './errorsActions';
import { browserHistory } from 'react-router';

export const createCartSuccess = (cart) => {
    return {
        type: 'CREATE_CART',
        cart
    }
}
export const updateCartCompanySuccess = (companyId) => {
    return {
        type: 'UPDATE_CART_COMPANY',
        companyId
    }
}

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

export const createCart = () => {
    return (dispatch) => {
        dispatch(createCartSuccess())
    }
}

export const updateCartCompany = (companyId) => {
    return (dispatch) => {
        dispatch(updateCartCompanySuccess(companyId))
    }
}

export const addItem = (item) => {
    return (dispatch) => {
        dispatch(addItemSuccess(item))
    }
}

export const removeItem = (item) => {
    return (dispatch) => {
        dispatch(addPurchaseSuccess(item))
    }
}
