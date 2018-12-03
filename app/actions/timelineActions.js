export const REQUEST_TIMELINE_LOAD = 'REQUEST_TIMELINE_LOAD';
export const SUCCESS_TIMELINE_LOAD = 'SUCCESS_TIMELINE_LOAD';
export const FAILURE_TIMELINE_LOAD = 'FAILURE_TIMELINE_LOAD';

export const REQUEST_TIMELINE_LOAD_MORE_POST = 'REQUEST_TIMELINE_LOAD_MORE_POST';
export const SUCCESS_TIMELINE_LOAD_MORE_POST = 'SUCCESS_TIMELINE_LOAD_MORE_POST';
export const FAILURE_TIMELINE_LOAD_MORE_POST = 'FAILURE_TIMELINE_LOAD_MORE_POST';

export const REQUEST_TIMELINE_REFRESH = 'REQUEST_TIMELINE_REFRESH';
export const SUCCESS_TIMELINE_REFRESH = 'SUCCESS_TIMELINE_REFRESH';
export const FAILURE_TIMELINE_REFRESH = 'FAILURE_TIMELINE_REFRESH';

export function requestTimelineLoad() {
  return {type: REQUEST_TIMELINE_LOAD}
}

export function successTimelineLoad(data) {
  return {type: SUCCESS_TIMELINE_LOAD, data: data}
}

export function failureTimelineLoad(er) {
  return {type: FAILURE_TIMELINE_LOAD}
}

export function requestTimelineLoadMorePost() {
  return {type: REQUEST_TIMELINE_LOAD_MORE_POST}
}

export function successTimelineLoadMorePost(data) {
  return {type: SUCCESS_TIMELINE_LOAD_MORE_POST, data: data}
}

export function failureTimelineLoadMorePost(er) {
  return {type: FAILURE_TIMELINE_LOAD_MORE_POST}
}

export function requestTimelineRefresh() {
  return {type: REQUEST_TIMELINE_REFRESH};
}

export function successTimelineRefresh() {
  return {type: SUCCESS_TIMELINE_REFRESH};
}

export function failureTimelineRefresh() {
  return {type: FAILURE_TIMELINE_REFRESH}
}
