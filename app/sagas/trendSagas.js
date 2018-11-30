import { call, all, put, takeEvery, takeLatest, take, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import {
  successTrendsLoad,
  REQUEST_TRENDS_LOAD,
} from "./../actions/searchActions.js"

const serverIP = '10.160.11.56:8080';


function* loadTrends(){
  const url = `http://${serverIP}/trends?id=23424747`;
  try {
    const response = yield call(fetch, url);
    const data = yield call([response, "json"]);
    yield put(successTrendsLoad(data[0].trends));
  } catch(er) {
    console.log(er);
  }
}

function* watchLoadTrends() {
  yield takeLatest(REQUEST_TRENDS_LOAD, loadTrends);
}

export default function* trendSagas() {
  yield all([
    watchLoadTrends(),
  ])
}
