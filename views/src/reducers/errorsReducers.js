export default (state = [], action) => {
    switch (action.type) {
        case 'SIGNUP_ERRORS':
            return { type: 'SIGNUP', message: action.errors }
        case 'COMPANY_ERRORS':
            return { type: 'SIGNUP', message: action.errors }
        case 'LOGIN_ERRORS':
            return { type: 'LOGIN', message: action.errors }
        default:
            return state
    }
}
