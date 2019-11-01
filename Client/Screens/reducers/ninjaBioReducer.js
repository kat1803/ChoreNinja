const initialState = {
    user: {},
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNED_IN':
            return { ...state, user: action.value }

        case 'SIGNED_OUT':
            return { ...state, user: {} }

        case 'SAVE':
            return { ...state, user: action.value }
    
        default:
            return state
    }
}
