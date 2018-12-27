import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import appReducer from './store/appReducer'; //Import the reducer
import appSagas from './store/appSagas';
import reactotron from '../ReactotronConfig'

const sagaMonitor = reactotron.createSagaMonitor()


const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

export const store = reactotron.createStore(appReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(appSagas)
