import {
  REQUEST_TRENDS_LOAD,
  SUCCESS_TRENDS_LOAD,
  FAILURE_TRENDS_LOAD,
} from "./trendActions" //Import the actions types constant we defined in our actions

let trendState = {
  trends: [],
  loadingTrends: false,
};

const TrendReducer = (state = trendState, action) => {
  switch (action.type) {
    case REQUEST_TRENDS_LOAD:
      state = Object.assign({}, state, { loadingTrends: true });
      return state;
    case SUCCESS_TRENDS_LOAD:
      state = Object.assign({}, state, { trends: action.data, loadingTrends: false });
      return state;
    case FAILURE_TRENDS_LOAD:
      state = Object.assign({}, state, {});
      return state;
    default:
      return state;
    }
};

export default TrendReducer;
