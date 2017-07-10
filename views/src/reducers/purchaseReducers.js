const initialUserState = {

}

export default (state = initialUserState, action) => {
    switch (action.type) {
        case 'ADD_PURCHASE':
            return action.purchase
        case 'REMOVE_PURCHASE':
            return { ...state, action.purchase }
        default:
            return state
    }
}
