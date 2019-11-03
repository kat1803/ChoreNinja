const initialState = {
  user: false,
  token: "",
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNED_IN':
      return {...state, user: action.value.user, token: action.value.token}

	case 'UPDATE_AUTH':
	return {...state, user: action.value}

    case 'SIGNED_OUT':
      return {...state, user: false, token: ""}

    default:
      return state
  }
}
