import {
  REQUEST_TRENDS_LOAD,
  SUCCESS_TRENDS_LOAD,
  FAILURE_TRENDS_LOAD,
  RESET_TRENDS,
} from "./trendActions" //Import the actions types constant we defined in our actions

export let trendState = {
  trends: [],
  loadingTrends: false,

  failureError: '',
  hasFailed: false,
};

const TrendReducer = (state = trendState, action) => {
  switch (action.type) {
    case REQUEST_TRENDS_LOAD:
      state = Object.assign({}, state, { loadingTrends: true, hasFailed: false });
      return state;
    case SUCCESS_TRENDS_LOAD:
      state = Object.assign({}, state, { trends: action.data, loadingTrends: false });
      return state;
    case FAILURE_TRENDS_LOAD:
      state = Object.assign({}, state, {hasFailed: true, failureError: action.errorDetail});
      return state;
    case RESET_TRENDS:
      state = Object.assign({}, state, {trends: [], loadingTrends: false});
      return state;
    default:
      return state;
    }
};

export default TrendReducer;
