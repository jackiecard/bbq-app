export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_PURCHASE_SUCCESS':
            return action.purchase
        default:
            return state
    }
}
