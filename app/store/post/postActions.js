export const REQUEST_POST_LOAD = 'REQUEST_POST_LOAD'
export const SUCCESS_POST_LOAD = 'SUCCESS_POST_LOAD'
export const FAILURE_POST_LOAD = 'FAILURE_POST_LOAD'

export const REQUEST_POST_LOAD_MORE = 'REQUEST_POST_LOAD_MORE'
export const SUCCESS_POST_LOAD_MORE = 'SUCCESS_POST_LOAD_MORE'
export const FAILURE_POST_LOAD_MORE = 'FAILURE_POST_LOAD_MORE'

export const REQUEST_POST_SEARCH = 'REQUEST_POST_SEARCH'
export const SUCCESS_POST_SEARCH = 'SUCCESS_POST_SEARCH'
export const FAILURE_POST_SEARCH = 'FAILURE_POST_SEARCH'

export const REQUEST_POST_SEARCH_MORE = 'REQUEST_POST_SEARCH_MORE'
export const SUCCESS_POST_SEARCH_MORE = 'SUCCESS_POST_SEARCH_MORE'
export const FAILURE_POST_SEARCH_MORE = 'FAILURE_POST_SEARCH_MORE'

export const requestLoadPost = () => {
  return {type: REQUEST_POST_LOAD}
}
export const successLoadPost = (data) => {
  return {type: SUCCESS_POST_LOAD, data: data}
}
export const failureLoadPost = (er) => {
  return {type: FAILURE_POST_LOAD}
}

// ****************************************************

export const requestLoadMorePost = () => {
  return {type: REQUEST_POST_LOAD_MORE}
}
export const successLoadMorePost = (data) => {
  return {type: SUCCESS_POST_LOAD_MORE, data}
}
export const failureLoadMorePost = (er) => {
  return {type: FAILURE_POST_LOAD_MORE}
}

// ****************************************************

export const requestSearchForPost = (searchKeyword) => {
  return {type: REQUEST_POST_SEARCH, searchKeyword: searchKeyword}
}
export const successSearchForPost = (data) => {
  return {type: SUCCESS_POST_SEARCH, data: data}
}
export const failureSearchForPost = (er) => {
  return {type: FAILURE_POST_SEARCH}
}

// ****************************************************

export const requestSearchMorePost = () => {
  return {type: REQUEST_POST_SEARCH_MORE}
}
export const successSearchMorePost = (data) => {
  return {type: SUCCESS_POST_SEARCH_MORE, data: data}
}
export const failureSearchMorePost = (er) => {
  return {type: FAILURE_POST_SEARCH_MORE}
}

// ****************************************************
