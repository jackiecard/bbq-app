const initialUserState = {
    list: []
}

export default (state = initialUserState, action) => {
    switch (action.type) {
        case 'REGISTER_SUCCESS':
            return {
                    ...state,
                    list: state.list.concat(action.company)
                }
        default:
            return state
    }
}
