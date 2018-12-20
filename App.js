import React from 'react';
import Reactotron from './ReactotronConfig'
import { AppRegistry, Platform, StatusBar, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import createSagaMiddleware from 'redux-saga';
import appSagas from './app/store/appSagas';

import AppReducer from './app/store/appReducer';
import { AppNavigator, middleware } from './app/components/AppNavigator';

const sagaMonitor = Reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

const store = Reactotron.createStore(
  AppReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(appSagas);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
