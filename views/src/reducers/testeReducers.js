export default (state = [], action) => {
    switch (action.type) {
        case 'TESTE':
            return action
        default:
            return state
    }
}
