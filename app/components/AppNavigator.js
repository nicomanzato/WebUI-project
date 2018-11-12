import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import Routes from '../config/routes';
import { Ionicons } from '@expo/vector-icons';
const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

//const RootNavigator = createStackNavigator(Routes);
const RootNavigator = createMaterialTopTabNavigator(Routes,{
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

      height: 80,
      width: 80,
      alignItems: 'center'
    },
    style:{
      flex: .15,
      backgroundColor: 'white',
    }
  },
});

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };
