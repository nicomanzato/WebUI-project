'use strict';

import React from 'react'
import {Platform, StatusBar} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers'
import {Routes, timelineStackRoutes} from '../config/routes'
import { Ionicons } from '@expo/vector-icons'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import ConfigScreen from '../screens/ConfigScreen'
import PostScreen from '../screens/PostScreen'
import UserProfileScreen from '../screens/UserProfileScreen'
import AnimatedScreen from '../screens/AnimatedScreen'

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const timelineStack = createStackNavigator({
  Home:  HomeScreen,
  UserProfile: UserProfileScreen,
  Post: PostScreen,
},{
    initialRouteName: 'Home',
  },
);

timelineStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
   return {
    tabBarVisible,
  };
};

const searchStack = createStackNavigator({
  Search:  SearchScreen,
  UserProfile: UserProfileScreen,
  Post:  PostScreen
});

searchStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const RootNavigator = createMaterialTopTabNavigator({

  Home: timelineStack,
  Search: searchStack,
  Config: { screen: ConfigScreen},

},{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      switch(routeName){
        case "Home": {
          iconName = "ios-home";
          break;
        }
        case "Config": {
          iconName = "ios-cog";
          break;
        }
        default: {
          iconName = "ios-search"
        }
      }
      return <Ionicons name={iconName} size={horizontal ? 35 : 45} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'grey',
    showLabel: false,
    marginTop: Platform.OS === 'ios' ? 0 : 24,
    showIcon: 'true',
    indicatorStyle: {
      borderBottomColor: '#1183ff',
      borderBottomWidth: 2,
    },
    labelStyle: {
      fontSize: 0
    },
    iconStyle: {
      marginTop: Platform.OS === 'ios' ? 0 : 24,
      padding: 0,
      height: 40,
      width: 40,
    },
    style:{
      padding: 0,
      backgroundColor: 'white',
      justifyContent: 'center',
    }
  },
});

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };
