const initialUserState = {
    company: '',
    itemsList: []
}

export default (state = initialUserState, action) => {
    switch (action.type) {
        case 'UPDATE_CART_COMPANY':
            return { ...state, company: action.companyId }
        case 'ADD_ITEM_TO_CART':
            return { ...state, itemsList: state.itemsList.concat(action.item) }
        case 'REMOVE_ITEM_FROM_CAR':
            return { ...state, itemsList: state.itemsList.filter(item => {
                    if(JSON.stringify(item) === JSON.stringify(action.item)){
                        return
                    }
                    return item
            })  }
        default:
            return state
    }
}
