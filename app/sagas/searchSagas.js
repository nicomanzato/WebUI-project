import { call, all, put, takeEvery, takeLatest, take, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import {getSearchKeyword, getLastSearchResultId} from './searchSelectors'

import {
  successSearchLoadMorePost,
  failureSearchLoadMorePost,
  successSearchResultsLoad,
  failureSearchResultsLoad,
  REQUEST_SEARCH_RESULTS_LOAD,
  REQUEST_SEARCH_LOAD_MORE_POST,
} from "./../actions/searchActions.js"

const serverIP = '10.160.11.56:8080';

function* searchForPost() {

  try {
    const count = 50;
    const searchKeyword = yield select(getSearchKeyword);
    const url = `http://${serverIP}/search?q=${searchKeyword}&count=${count}`;
    const response = yield call(fetch,url);
    const data = yield call([response, "json"]);
    yield put(successSearchResultsLoad(data.statuses, searchKeyword));
  } catch (er) {
    failureSearchResultsLoad(er);
    console.log(er);
  }
}

function* watchSearchForPost() {
  yield takeLatest(REQUEST_SEARCH_RESULTS_LOAD, searchForPost)
}

function* searchMorePost() {
  try {
    const count = 50;
    const searchKeyword = yield select(getSearchKeyword);
    const maxID = yield select(getLastSearchResultId);
    const url = `http://${serverIP}/search?q=${searchKeyword}&max_id=${maxID}&count=${count}`;

    const response = yield call(fetch,url);
    const data = yield call([response, "json"]);
    yield put(successSearchLoadMorePost(data.statuses.slice(1)));
  } catch (er) {
    failureSearchLoadMorePost(er);
    console.log(er);
  }
}

function* watchSearchMorePost() {
    yield takeLatest(REQUEST_SEARCH_LOAD_MORE_POST, searchMorePost);
}

export default function* searchSagas() {
  yield all([
    watchSearchForPost(),
    watchSearchMorePost(),
  ])
}
