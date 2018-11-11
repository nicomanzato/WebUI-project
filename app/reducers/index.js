import { combineReducers } from 'redux';
import timelineReducer from './timelineReducer';
import nav from './navReducer';

const AppReducer = combineReducers({
  nav,
  timelineReducer
});

export default AppReducer;
