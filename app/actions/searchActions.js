export const REQUEST_SEARCH_RESULTS_LOAD = 'REQUEST_SEARCH_RESULTS_LOAD'
export const SUCCESS_SEARCH_RESULTS_LOAD = 'SUCCESS_SEARCH_RESULTS_LOAD'
export const FAILURE_SEARCH_RESULTS_LOAD = 'FAILURE_SEARCH_RESULTS_LOAD'

export const REQUEST_SEARCH_LOAD_MORE_POST = 'REQUEST_SEARCH_LOAD_MORE_POST'
export const SUCCESS_SEARCH_LOAD_MORE_POST = 'SUCCESS_SEARCH_LOAD_MORE_POST'
export const FAILURE_SEARCH_LOAD_MORE_POST = 'FAILURE_SEARCH_LOAD_MORE_POST'

const serverIP = '10.160.11.56:8080';

export function requestSearchResultLoad(keyword) {
  return {type: REQUEST_SEARCH_RESULTS_LOAD, searchKeyword: keyword}
}

export function successSearchResultsLoad(data, searchKeyword) {
  return {type: SUCCESS_SEARCH_RESULTS_LOAD, data: data, searchKeyword: searchKeyword}
}

export function failureSearchResultsLoad(er) {
  return {type: FAILURE_SEARCH_RESULTS_LOAD}
}

export function requestSearchLoadMorePost() {
  return {type: REQUEST_SEARCH_LOAD_MORE_POST}
}

export function successSearchLoadMorePost(data) {
  return {type: SUCCESS_SEARCH_LOAD_MORE_POST, data: data}
}

export function failureSearchLoadMorePost(er) {
  return {type: FAILURE_SEARCH_LOAD_MORE_POST}
}
