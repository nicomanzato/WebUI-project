import React from 'react';
import { AppRegistry, Platform, StatusBar, View, Text } from 'react-native';
import { Provider } from 'react-redux';

import AppReducer from './app/store/appReducer';
import { AppNavigator, middleware } from './app/components/AppNavigator';
import {store} from './app/store'

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
