import { call, all, put, takeEvery, takeLatest, take, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import {
  successTrendsLoad,
  successSearchResultsLoad,
  REQUEST_SEARCH_RESULTS_LOAD,
} from "./../actions/searchActions.js"

const serverIP = '10.160.11.56:8080';

const getSearchKeyword = state => {
  return state.searchReducer.searchKeyword;
}

function* searchForPost() {

  const searchKeyword = yield select(getSearchKeyword);
  const url = `http://${serverIP}/search?q=${searchKeyword}`;
  const response = yield call(fetch,url);
  const data = yield call([response, "json"]);
  yield put(successSearchResultsLoad(data.statuses, searchKeyword));
}

function* watchSearchForPost() {
  yield takeLatest(REQUEST_SEARCH_RESULTS_LOAD, searchForPost)
}

export default function* searchSagas() {
  yield all([
    watchSearchForPost(),
  ])
}
