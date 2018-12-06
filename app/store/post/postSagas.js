import { call, all, put, takeEvery, takeLatest, take, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import {
  getConfiguration,
  getLastPostId,
  getSearchKeyword,
  getLastSearchResultId,
  getShowPostId,
  getUserProfilePostId} from './postSelector'

import {
  requestUserProfileLoadPost,
  successLoadPost,
  successLoadMorePost,
  successSearchForPost,
  successSearchMorePost,
  successPostShow,
  successUserProfileLoadPost,
  failureLoadPost,
  failureLoadMorePost,
  failureSearchForPost,
  failureSearchMorePost,
  failurePostShow,
  failureUserProfileLoadPost,
  REQUEST_POST_LOAD,
  REQUEST_POST_LOAD_MORE,
  REQUEST_POST_SEARCH,
  REQUEST_POST_SEARCH_MORE,
  REQUEST_POST_SHOW,
  REQUEST_USER_PROFILE_LOAD_POST
} from "./postActions"

import {SUCCESS_USER_PROFILE} from './../user/userActions'

const serverIP = '10.160.11.56:8080';

function* loadTimeline() {

  const count = 50;
  const url = `http://${serverIP}/timeline?count=${count}`;

  try{
    const response = yield call(fetch, url);
    const data = yield call([response, "json"]);
    const configuration = yield select(getConfiguration);
    yield put(successLoadPost(data.slice(1), configuration));
  } catch (er) {
    failureLoadPost(er);
    console.log(er);
  }
}

function* watchLoadTimeline() {
  yield takeLatest(REQUEST_POST_LOAD, loadTimeline);
}

function* infiniteScrollTimeline() {
  try {
    const count = 20;

    const maxID = yield select(getLastPostId);
    let url = `http://${serverIP}/timeline?count=${count}&max_id=${maxID}`;
    const response = yield call(fetch, url);
    const data = yield call([response, "json"]);
    const configuration = yield select(getConfiguration);
    yield put(successLoadMorePost(data.slice(1), configuration));
  } catch(er) {
    failureLoadMorePost(er);
    console.log(er);
  }
}

function* watchInfiniteScrollTimeline() {
  yield takeLatest(REQUEST_POST_LOAD_MORE, infiniteScrollTimeline);
}

function* searchForPost() {
  try {
    const count = 50;
    const searchKeyword = yield select(getSearchKeyword);
    const url = `http://${serverIP}/search?q=${searchKeyword}&count=${count}`;
    const response = yield call(fetch,url);
    const data = yield call([response, "json"]);
    yield put(successSearchForPost(data.statuses, searchKeyword));
  } catch (er) {
    failureSearchForPost(er);
    console.log(er);
  }
}

function* watchSearchForPost() {
  yield takeLatest(REQUEST_POST_SEARCH, searchForPost)
}

function* searchMorePost() {
  try {
    const count = 20;
    const searchKeyword = yield select(getSearchKeyword);
    const maxID = yield select(getLastSearchResultId);
    const url = `http://${serverIP}/search?q=${searchKeyword}&max_id=${maxID}&count=${count}`;

    const response = yield call(fetch,url);
    const data = yield call([response, "json"]);
    yield put(successSearchMorePost(data.statuses.slice(1)));
  } catch (er) {
    failureSearchMorePost(er);
    console.log(er);
  }
}

function* watchSearchMorePost() {
  yield takeLatest(REQUEST_POST_SEARCH_MORE, searchMorePost);
}

function* showPost() {
  try {
    const id = yield select(getShowPostId);
    const url = `http://${serverIP}/show?id=${id}`;
    const response = yield call(fetch,url);
    const data = yield call([response, "json"]);
    yield put(successPostShow(data));
  } catch (er) {
    failurePostShow(er);
    console.log(er);
  }
}

function* watchShowPost() {
  yield takeLatest(REQUEST_POST_SHOW, showPost);
}

function* loadUserProfileTimeline() {
  try {
    const id = yield select(getUserProfilePostId);
    const url = `http://${serverIP}/user_timeline?user_id=${id}`;
    const response = yield call(fetch,url);
    const data = yield call([response, "json"]);
    yield put(successUserProfileLoadPost(data));
  } catch (er) {
    failureUserProfileLoadPost(er);
    console.log(er);
  }
}

function* watchLoadUserProfileTimeline() {
  yield takeLatest(REQUEST_USER_PROFILE_LOAD_POST, loadUserProfileTimeline);
}

function* onUserProfileLoaded() {
  yield put(requestUserProfileLoadPost());
}

function* watchUserProfileLoaded() {
  yield takeLatest(SUCCESS_USER_PROFILE, onUserProfileLoaded);
}

export default function* postSagas() {
  yield all([
    watchLoadTimeline(),
    watchInfiniteScrollTimeline(),
    watchSearchForPost(),
    watchSearchMorePost(),
    watchShowPost(),
    watchLoadUserProfileTimeline(),
    watchUserProfileLoaded(),
  ])
}
