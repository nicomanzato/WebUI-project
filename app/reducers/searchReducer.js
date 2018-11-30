import {
  REQUEST_TRENDS_LOAD,
  SUCCESS_TRENDS_LOAD,
  REQUEST_SEARCH_RESULTS_LOAD,
  SUCCESS_SEARCH_RESULTS_LOAD,
  REQUEST_SEARCH_APPEND_MORE_POST,
  SUCCESS_SEARCH_APPEND_MORE_POST
} from "../actions/searchActions" //Import the actions types constant we defined in our actions

let timelineState = {
  trends: [],
  loadingTrends: false,
  hasSearched: false,
  loadingSearch: false,
  loadingMoreSearchResults: false,
  searchKeyword: '',
  searchResult: [],
};

const SearchReducer = (state = timelineState, action) => {
  switch (action.type) {
    case REQUEST_TRENDS_LOAD:
      state = Object.assign({}, state, { loadingTrends: true });
      return state;
    case SUCCESS_TRENDS_LOAD:
      state = Object.assign({}, state, { trends: action.data, loadingTrends: false });
      return state;
    case REQUEST_SEARCH_RESULTS_LOAD:
      state = Object.assign({}, state, { hasSearched: true, loadingSearch: true, searchKeyword: action.searchKeyword });
      return state;
    case SUCCESS_SEARCH_RESULTS_LOAD:
      state = Object.assign({}, state, { searchResult: action.data, loadingSearch: false, searchKeyword: action.searchKeyword });
      return state;
    case REQUEST_SEARCH_APPEND_MORE_POST:
      state = Object.assign({}, state, {loadingMoreSearchResults: true });
      return state;
    case SUCCESS_SEARCH_APPEND_MORE_POST:
      state = Object.assign({}, state, {searchResult: state.searchResult.concat(action.data), loadingMoreSearchResults: false });
      return state;
    default:
      return state;
    }
};

export default SearchReducer;
