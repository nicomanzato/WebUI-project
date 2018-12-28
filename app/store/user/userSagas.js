import { call, all, put, takeEvery, takeLatest, take, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import {getUserProfileId} from './userSelector'

import {
  successUserProfile,
  failureUserProfile,
  REQUEST_USER_PROFILE,
} from "./userActions.js"

export const serverIP = '10.160.11.56:8080';

export function* loadUserProfile(){
  const userId = yield select(getUserProfileId);
  const url = `http://${serverIP}/user?id=${userId}`;
  try {
    const response = yield call(fetch, url);
    const data = yield call([response, 'json']);
    yield put(successUserProfile(data));
  } catch(er) {
    yield put(failureUserProfile(er));
    //console.log(er);
  }
}

function* watchUserProfile() {
  yield takeLatest(REQUEST_USER_PROFILE, loadUserProfile);
}

export default function* userSagas() {
  yield all([
    watchUserProfile(),
  ])
}
