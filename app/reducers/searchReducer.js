import {
  TRENDS_AVAILABLE,
} from "../actions/searchActions" //Import the actions types constant we defined in our actions

let timelineState = {
  trends: [],
  loadingTrends: true,
};

const SearchReducer = (state = timelineState, action) => {
  switch (action.type) {
    case TRENDS_AVAILABLE:
      console.log(action.data);
      state = Object.assign({}, state, { trends: action.data, loadingTrends: false });
      return state;
    default:
      return state;
    }
};

export default SearchReducer;
