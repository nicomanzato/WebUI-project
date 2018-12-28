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

export const RESET_POST_SEARCH = 'RESET_POST_SEARCH'

export const REQUEST_POST_SHOW = 'REQUEST_POST_SHOW'
export const SUCCESS_POST_SHOW = 'SUCCESS_POST_SHOW'
export const FAILURE_POST_SHOW = 'FAILURE_POST_SHOW'

export const REQUEST_USER_PROFILE_LOAD_POST = 'REQUEST_USER_PROFILE_LOAD_POST'
export const SUCCESS_USER_PROFILE_LOAD_POST = 'SUCCESS_USER_PROFILE_LOAD_POST'
export const FAILURE_USER_PROFILE_LOAD_POST = 'FAILURE_USER_PROFILE_LOAD_POST'

export const requestLoadPost = () => {
  return {type: REQUEST_POST_LOAD}
}
export const successLoadPost = (data) => {
  return {type: SUCCESS_POST_LOAD, data: data}
}
export const failureLoadPost = (er) => {
  return {type: FAILURE_POST_LOAD, errorDetail: er}
}

// ****************************************************

export const requestLoadMorePost = () => {
  return {type: REQUEST_POST_LOAD_MORE}
}
export const successLoadMorePost = (data) => {
  return {type: SUCCESS_POST_LOAD_MORE, data: data}
}
export const failureLoadMorePost = (er) => {
  return {type: FAILURE_POST_LOAD_MORE, errorDetail: er}
}

// ****************************************************

export const requestSearchForPost = (searchKeyword) => {
  return {type: REQUEST_POST_SEARCH, searchKeyword: searchKeyword}
}
export const successSearchForPost = (data) => {
  return {type: SUCCESS_POST_SEARCH, data: data}
}
export const failureSearchForPost = (er) => {
  return {type: FAILURE_POST_SEARCH, errorDetail: er}
}

// ****************************************************

export const requestSearchMorePost = () => {
  return {type: REQUEST_POST_SEARCH_MORE}
}
export const successSearchMorePost = (data) => {
  return {type: SUCCESS_POST_SEARCH_MORE, data: data}
}
export const failureSearchMorePost = (er) => {
  return {type: FAILURE_POST_SEARCH_MORE, errorDetail: er}
}

// ****************************************************

export const resetPostSearch = () => {
  return {type: RESET_POST_SEARCH}
}

// ****************************************************

export const requestPostShow = (id) => {
  return {type: REQUEST_POST_SHOW, id: id}
}

export const successPostShow = (data) => {
  return {type: SUCCESS_POST_SHOW, data: data}
}

export const failurePostShow = (er) => {
  return {type: FAILURE_POST_SHOW, errorDetail: er}
}

// ****************************************************

export const requestUserProfileLoadPost = () => {
  return {type: REQUEST_USER_PROFILE_LOAD_POST}
}

export const successUserProfileLoadPost = (data) => {
  return {type: SUCCESS_USER_PROFILE_LOAD_POST, data: data}
}

export const failureUserProfileLoadPost = (er) => {
  return {type: FAILURE_USER_PROFILE_LOAD_POST, errorDetail: er}
}
