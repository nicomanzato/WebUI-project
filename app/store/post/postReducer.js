import {
  REQUEST_POST_LOAD,
  SUCCESS_POST_LOAD,
  FAILURE_POST_LOAD,
  REQUEST_POST_LOAD_MORE,
  SUCCESS_POST_LOAD_MORE,
  FAILURE_POST_LOAD_MORE,
  REQUEST_POST_SEARCH,
  SUCCESS_POST_SEARCH,
  FAILURE_POST_SEARCH,
  REQUEST_POST_SEARCH_MORE,
  SUCCESS_POST_SEARCH_MORE,
  FAILURE_POST_SEARCH_MORE
} from './postActions'

let postState = {
  loadedPost: [],
  isLoadingPost: false,
  isLoadingMorePost: false,

  hasSearchedForPost: false,
  loadingSearchPost: false,
  loadingMoreSearchPost: false,
  searchKeyword: '',
  searchPost: [],
};

const PostReducer = (state = postState, action) => {
  switch(action.type) {

    case REQUEST_POST_LOAD:
      state = Object.assign({}, state, { isLoadingPost: true });
      return state;
    case SUCCESS_POST_LOAD:
      state = Object.assign({}, state, { loadedPost: action.data, isLoadingPost: false });
      return state;
    case FAILURE_POST_LOAD:
      state = Object.assign({}, state, {});
      return state;

    case REQUEST_POST_LOAD_MORE:
      state = Object.assign({}, state, { isLoadingMorePost: true });
      return state;
    case SUCCESS_POST_LOAD_MORE:
      state = Object.assign({}, state, { loadedPost: state.loadedPost.concat(action.data), isLoadingMorePost: false });
      return state;
    case FAILURE_POST_LOAD_MORE:
      state = Object.assign({}, state, {});
      return state;

    case REQUEST_POST_SEARCH:
      state = Object.assign({}, state, { hasSearchedForPost: true, loadingSearchPost: true, searchKeyword: action.searchKeyword });
      return state;
    case SUCCESS_POST_SEARCH:
      state = Object.assign({}, state, { searchPost: action.data, loadingSearchPost: false });
      return state;
    case FAILURE_POST_SEARCH:
      state = Object.assign({}, state, {});
      return state;

    case REQUEST_POST_SEARCH_MORE:
      state = Object.assign({}, state, {loadingMoreSearchPost: true });
      return state;
    case SUCCESS_POST_SEARCH_MORE:
      state = Object.assign({}, state, {searchPost: state.searchPost.concat(action.data), loadingMoreSearchPost: false });
      return state;
    case FAILURE_POST_LOAD_MORE:
      state = Object.assign({}, state, {});
      return state;

    default:
      return state;
  }
}

export default PostReducer
