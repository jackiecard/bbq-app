export default (state = [], action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return action.login
        case 'ACCOUNT_CHANGED_SUCCESS':
            return action.login
        default:
            return state
    }
}
