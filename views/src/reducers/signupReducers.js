export default (state = [], action) => {
    switch (action.type) {
        case 'SIGNUP_SUCCESS':
            return action.signup
        default:
            return state
    }
}
