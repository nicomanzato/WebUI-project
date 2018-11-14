import { combineReducers } from 'redux';
import timelineReducer from './timelineReducer';
import configurationReducer from './ConfigurationReducer';
import nav from './navReducer';

const AppReducer = combineReducers({
  nav,
  timelineReducer,
  configurationReducer
});

export default AppReducer;
