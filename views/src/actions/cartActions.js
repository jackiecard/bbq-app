import * as errorActions from './errorsActions';
import { browserHistory } from 'react-router';

export const updateCartCompanySuccess = (companyId) => {
    return {
        type: 'UPDATE_CART_COMPANY',
        companyId
    }
}

export const addItemToCartSuccess = (item) => {
    return {
        type: 'ADD_ITEM_TO_CART',
        item
    }
}

export const removeItemSuccess = (item) => {
    return {
        type: 'REMOVE_ITEM_FROM_CAR',
        item
    }
}

export const updateCartCompany = (companyId) => {
    return (dispatch) => {
        dispatch(updateCartCompanySuccess(companyId))
    }
}

export const addItemToCart = (item) => {
    return (dispatch) => {
        dispatch(addItemToCartSuccess(item))
    }
}

export const removeItem = (item) => {
    return (dispatch) => {
        dispatch(addPurchaseSuccess(item))
    }
}
