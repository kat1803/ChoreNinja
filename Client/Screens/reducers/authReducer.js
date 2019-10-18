const initialState = {
  user: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNED_IN':
      return {...state, user: action.value}

    case 'SIGNED_OUT':
      return {...state, user: {}}

    default:
      return state
  }
}
