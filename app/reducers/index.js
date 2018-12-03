'use strict';

import { combineReducers } from 'redux';
import timelineReducer from './timelineReducer';
import configurationReducer from './configurationReducer';
import searchReducer from './searchReducer';
import trendReducer from './trendReducer'
import nav from './navReducer';

const AppReducer = combineReducers({
  nav,
  timelineReducer,
  searchReducer,
  trendReducer,
  configurationReducer
});

export default AppReducer;
