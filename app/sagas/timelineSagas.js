import { call, all, put, takeEvery, takeLatest, take, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import {getConfiguration, getLastPostId} from './timelineSelectors'

import {
  successTimelineLoad,
  successTimelineLoadMorePost,
  failureTimelineLoad,
  failureTimelineLoadMorePost,
  REQUEST_TIMELINE_LOAD_MORE_POST,
  REQUEST_TIMELINE_LOAD
} from "./../actions/timelineActions.js"

const serverIP = '10.160.11.56:8080';

function* loadTimeline() {

  const count = 50;
  const url = `http://${serverIP}/timeline?count=${count}`;

  try{
    const response = yield call(fetch, url);
    const data = yield call([response, "json"]);
    const configuration = yield select(getConfiguration);
    yield put(successTimelineLoad(applyTimelineConfigurations(data.slice(1), configuration)));
  } catch (er) {
    failureTimelineLoad(er);
    console.log(er);
  }
}

function* watchLoadTimeline() {
  yield takeLatest(REQUEST_TIMELINE_LOAD, loadTimeline);
}

function* infiniteScrollTimeline() {
  try {
    const count = 20;

    const maxID = yield select(getLastPostId);
    let url = `http://${serverIP}/timeline?count=${count}&max_id=${maxID}`;
    const response = yield call(fetch, url);
    const data = yield call([response, "json"]);
    const configuration = yield select(getConfiguration);
    yield put(successTimelineLoadMorePost(applyTimelineConfigurations(data.slice(1), configuration)));
  } catch(er) {
    failureTimelineLoadMorePost(er);
    console.log(er);
  }
}

function* watchInfiniteScrollTimeline() {
  yield takeLatest(REQUEST_TIMELINE_LOAD_MORE_POST, infiniteScrollTimeline);
}

export default function* timelineSagas() {
  yield all([
    watchLoadTimeline(),
    watchInfiniteScrollTimeline()
  ])
}


function applyTimelineConfigurations(newPosts, configuration) {

  let posts = newPosts;
  return posts.filter((post) => {

    if (configuration.configVerifiedOnly && !post.user.verified) { return false; }
    if (configuration.configDoNotFollow && !post.user.following) { return false; }
    if (configuration.configHaveDefaultInformation && post.user.default_profile) { return false; }
    if (configuration.configTextTruncated && post.truncated) { return false; }
    if (configuration.configContainsLink){
      return new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(post.text)
    }

    return true;

  });
}
