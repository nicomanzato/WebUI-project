import {
  TRENDS_AVAILABLE,
  START_SEARCH_FOR_RESULTS,
  SEARCH_RESULTS_AVAILABLE,
} from "../actions/searchActions" //Import the actions types constant we defined in our actions

let timelineState = {
  trends: [],
  loadingTrends: true,
  hasSearched: false,
  loadingSearch: false,
  searchResult: [],
};

const SearchReducer = (state = timelineState, action) => {
  switch (action.type) {
    case TRENDS_AVAILABLE:
      state = Object.assign({}, state, { trends: action.data, loadingTrends: false });
      return state;
    case START_SEARCH_FOR_RESULTS:
      state = Object.assign({}, state, { hasSearched: true, loadingSearch: true });
      return state;
    case START_SEARCH_FOR_RESULTS:
      state = Object.assign({}, state, { searchResult: action.data, loadingSearch: false });
      return state;
    default:
      return state;
    }
};

export default SearchReducer;
