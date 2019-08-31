    
// Initial State
const initialState = {
    posts: [],
  };
  
  // Redux: Counter Reducer
  const homescreenReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'RECIEVE_POST': {
        return {
          ...state,
          posts: action.value,
        };
      }
      default: {
        return state;
      }
    }
  };
  
  // Exports
  export default homescreenReducer;