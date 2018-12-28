export const REQUEST_TRENDS_LOAD = 'REQUEST_TRENDS_LOAD'
export const SUCCESS_TRENDS_LOAD = 'SUCCESS_TRENDS_LOAD'
export const FAILURE_TRENDS_LOAD = 'FAILURE_TRENDS_LOAD'
export const RESET_TRENDS = 'RESET_TRENDS'

export function requestTrendsLoad() {
  return { type: REQUEST_TRENDS_LOAD }
}

export function successTrendsLoad(data) {
  return { type: SUCCESS_TRENDS_LOAD, data: data }
}

export function failureTrendsLoad(er) {
  return {type: FAILURE_TRENDS_LOAD, errorDetail: er}
}

export function resetTrends() {
  return {type: RESET_TRENDS}
}
