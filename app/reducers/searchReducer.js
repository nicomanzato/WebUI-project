import {
  TRENDS_AVAILABLE,
  START_SEARCH_FOR_RESULTS,
  SEARCH_RESULTS_AVAILABLE,
  SEARCH_LOADING_MORE_SEARCH_RESULTS,
  SEARCH_APPEND_MORE_POST
} from "../actions/searchActions" //Import the actions types constant we defined in our actions

let timelineState = {
  trends: [],
  loadingTrends: true,
  hasSearched: false,
  loadingSearch: false,
  loadingMoreSearchResults: false,
  searchValue: '',
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
    case SEARCH_RESULTS_AVAILABLE:
      state = Object.assign({}, state, { searchResult: action.data, loadingSearch: false, searchValue: action.searchValue });
      return state;
    case SEARCH_LOADING_MORE_SEARCH_RESULTS:
      state = Object.assign({}, state, {loadingMoreSearchResults: true });
      return state;
    case SEARCH_APPEND_MORE_POST:
      state = Object.assign({}, state, {searchResult: state.searchResult.concat(action.data), loadingMoreSearchResults: false });
      return state;
    default:
      return state;
    }
};

export default SearchReducer;
