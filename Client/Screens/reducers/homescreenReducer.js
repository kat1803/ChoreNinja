	
// Initial State
const initialState = {
	allPosts: [],
	myPosts: [],
	myJobs: [],
  };
  
  // Redux: Counter Reducer
  const homescreenReducer = (state = initialState, action) => {
	switch (action.type) {
	  case 'RECIEVE_ALL_POST': {
		return {
		  ...state,
		  allPosts: action.value,
		};
	  }
	  case 'RECIEVE_MY_POST': {
		return {
		  ...state,
		  myPosts: action.value,
		};
	  }
	  case 'RECIEVE_MY_JOB': {
		return {
		  ...state,
		  myJobs: action.value,
		};
	  }
	  default: {
		return state;
	  }
	}
  };
  
  // Exports
  export default homescreenReducer;