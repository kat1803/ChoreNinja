    
// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import homescreenReducer from './homescreenReducer';
import authReducer from './authReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  auth: authReducer,
  posts: homescreenReducer,
});

// Exports
export default rootReducer;