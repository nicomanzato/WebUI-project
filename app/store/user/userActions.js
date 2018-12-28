export const REQUEST_USER_PROFILE = 'REQUEST_USER_PROFILE'
export const SUCCESS_USER_PROFILE = 'SUCCESS_USER_PROFILE'
export const FAILURE_USER_PROFILE = 'FAILURE_USER_PROFILE'

export const requestUserProfile = (userId) => {
  return {type: REQUEST_USER_PROFILE, userId: userId}
}

export const successUserProfile = (data) => {
  return {type: SUCCESS_USER_PROFILE, data: data}
}

export const failureUserProfile = (er) => {
  return {type: FAILURE_USER_PROFILE, errorDetail: er}
}
