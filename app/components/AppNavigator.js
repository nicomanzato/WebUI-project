import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import {Routes, timelineStackRoutes} from '../config/routes';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import ConfigScreen from '../screens/ConfigScreen'
import PostScreen from '../screens/PostScreen'



const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const timelineStack = createStackNavigator({
  Home:  HomeScreen,
  Post: PostScreen
});

timelineStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

console.log(Routes);

Routes.home = timelineStack;

console.log(Routes);


//const RootNavigator = createStackNavigator(Routes);
const RootNavigator = createMaterialTopTabNavigator({

  Home: timelineStack,
  Search: { screen: SearchScreen},
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
    showIcon: 'true',
    iconStyle: {
      margin: 0,
      height: 80,
      width: 80,
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
