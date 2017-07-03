export const signupUser = (signup) => {
    return {
        type: 'SIGNUP_SUCCESS',
        signup
    }
}

export const testeSuccess = (teste) => {
    return {
        type: 'TESTE',
        teste
    }
}


export const teste = () => {
    return (dispatch) => {
        return Axios.get('/teste')
            .then(response => {
                dispatch(testeSuccess(response.data))
            })
            .catch(error =>{
                throw(error)
            });
    }
}
