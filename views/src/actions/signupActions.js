import Axios from 'axios';

export const signupUserSuccess = (signup) => {
    return {
        type: 'SIGNUP_SUCCESS',
        signup
    }
}

export const signupUser = (data) => {
    return (dispatch) => {
        return Axios.post('/api/signup', data)
            .then(response => {
                console.log(response.data)
                dispatch(signupUserSuccess(response.data))
            })
            .catch(error =>{
                console.log(error)
                throw(error)
            });
    }
}
