export default (state = [], action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return action.login
        default:
            return state
    }
}
