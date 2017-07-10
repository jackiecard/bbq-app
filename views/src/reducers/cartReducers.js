const initialUserState = {
    company: '',
    itens: []
}

export default (state = initialUserState, action) => {
    switch (action.type) {
        case 'CREATE_CART':
            return state
        case 'UPDATE_CART_COMPANY':
            return { ...state, company: action.companyId }
        case 'ADD_ITEM':
            return { ...state, itens: state.itens.concat(action.cart) }
        case 'REMOVE_ITEM':
            return { ...state, itens: state.itens.concat(action.cart) }
        default:
            return state
    }
}
