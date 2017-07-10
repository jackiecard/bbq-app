const initialUserState = {
    list: []
}

export default (state = initialUserState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return { ...state, list: state.list.concat(action.item) }
        case 'REMOVE_ITEM':
            return { ...state, list: state.list.concat(action.item) }
        default:
            return state
    }
}
