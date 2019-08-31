    
// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import homescreenReducer from './homescreenReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  posts: homescreenReducer,
});

// Exports
export default rootReducer;