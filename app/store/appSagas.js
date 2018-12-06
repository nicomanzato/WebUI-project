import { call, all, put, takeEvery, takeLatest, take, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import postSagas from './post/postSagas'
import trendSagas from './trend/trendSagas'
import userSagas from './user/userSagas'

export default function* appSagas() {
  yield all([
    postSagas(),
    trendSagas(),
    userSagas(),
  ])
}
