    
// Initial State
const initialState = {
    posts: [],
  };
  
  // Redux: Counter Reducer
  const homescreenReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'DELETE_POST': {
        return {
          ...state,
          posts: state.posts - action.value,
        };
      }
      default: {
        return state;
      }
    }
  };
  
  // Exports
  export default homescreenReducer;