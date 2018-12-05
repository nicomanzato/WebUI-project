'use strict';

import { combineReducers } from 'redux'
import PostReducer from './post/postReducer'
import TrendReducer from './trend/trendReducer'
import nav from './navigation/navReducer'
import ConfigurationReducer from './configuration/configurationReducer'

const AppReducer = combineReducers({
  PostReducer,
  TrendReducer,
  nav,
  ConfigurationReducer,
});

export default AppReducer;
