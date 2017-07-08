export const signupErrors = (errors) => {
    return {
        type: 'SIGNUP_ERRORS',
        errors
    }
}
export const loginErrors = (errors) => {
    return {
        type: 'LOGIN_ERRORS',
        errors
    }
}


export const sendLoginErrors = (errors) => {
    return (dispatch) => {
        dispatch(loginErrors(errors))
    }
}

export const sendSignupErrors = (errors) => {
    return (dispatch) => {
        dispatch(signupErrors(errors))
    }
}
