import { combineReducers } from 'redux';
import timelineReducer from './timelineReducer';
import configurationReducer from './ConfigurationReducer';
import searchReducer from './searchReducer';
import nav from './navReducer';

const AppReducer = combineReducers({
  nav,
  timelineReducer,
  searchReducer,
  configurationReducer
});

export default AppReducer;
