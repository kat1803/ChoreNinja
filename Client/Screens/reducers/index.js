    
// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import homescreenReducer from './homescreenReducer';
import authReducer from './authReducer';
import ninjaBioReducer from './ninjaBioReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  auth: authReducer,
  posts: homescreenReducer,
  user: ninjaBioReducer,
});

// Exports
export default rootReducer;