import React from 'react';
import Reactotron from './ReactotronConfig'
import { AppRegistry } from 'react-native';
import { Provider, Text } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './app/sagas/index';

import AppReducer from './app/reducers';
import { AppNavigator, middleware } from './app/components/AppNavigator';


//const store = createStore(AppReducer, applyMiddleware(thunk));

//const sagaMiddleware = createSagaMiddleware();
const sagaMonitor = Reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

const store = Reactotron.createStore(
  AppReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);

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
