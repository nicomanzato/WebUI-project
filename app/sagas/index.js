import { call, all, put, takeEvery, takeLatest, take, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import timelineSagas from './timelineSagas'
import trendSagas from './trendSagas'
import searchSagas from './searchSagas'

const serverIP = '10.160.11.56:8080';

export default function* rootSaga() {
  yield all([
    searchSagas(),
    timelineSagas(),
    trendSagas(),
  ])
}
