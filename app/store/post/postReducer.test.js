import PostReducer, {postState}  from './postReducer'
import PostMock from './mock/postMock'
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
  FAILURE_POST_SEARCH_MORE,
  REQUEST_POST_SHOW,
  SUCCESS_POST_SHOW,
  FAILURE_POST_SHOW,
  RESET_POST_SEARCH,
  REQUEST_USER_PROFILE_LOAD_POST,
  SUCCESS_USER_PROFILE_LOAD_POST,
  FAILURE_USER_PROFILE_LOAD_POST
} from './../../../app/store/post/postActions'

describe('post reducer', () => {

  it('should return the initial state', () => {
    expect(PostReducer(undefined, {})).toEqual(postState);
  });

  it('should handle REQUEST_POST_LOAD', () => {
    const expectedResult = Object.assign({}, postState, {isLoadingPost: true, hasFailed: false });

    expect(PostReducer(postState, {type: REQUEST_POST_LOAD})).toEqual(expectedResult);
  });

  it ('should handle SUCCESS_POST_LOAD', () => {
    const postList = [PostMock, PostMock, PostMock];
    const expectedResult = Object.assign({}, postState, {isLoadingPost: false, loadedPost: [PostMock, PostMock, PostMock]});

    expect(PostReducer(postState, {type: SUCCESS_POST_LOAD, data: postList})).toEqual(expectedResult);
  });

  it ('should handle FAILURE_POST_LOAD', () => {
    const errorMessage = 'something bad happened';
    const expectedResult = Object.assign({}, postState, {isLoadingPost: false, loadedPost: [], errorDetail: errorMessage, hasFailed: true});

    expect(PostReducer(postState, {type: FAILURE_POST_LOAD_MORE, errorDetail: errorMessage})).toEqual(expectedResult);
  });

  it('should handle REQUEST_POST_LOAD_MORE', () => {
    const expectedResult = Object.assign({}, postState, { isLoadingMorePost: true, hasFailed: false });

    expect(PostReducer(postState, {type: REQUEST_POST_LOAD_MORE})).toEqual(expectedResult);
  });

  it('should handle SUCCESS_POST_LOAD_MORE', () => {
    const postLoaded = [PostMock, PostMock];
    const expectedResult = Object.assign({}, postState, {isLoadingMorePost: false, loadedPost: postLoaded});

    expect(PostReducer(postState, {type: SUCCESS_POST_LOAD_MORE, data: postLoaded})).toEqual(expectedResult);
  });

  it('should handle FAILURE_POST_LOAD_MORE', () => {
    const errorMessage = 'something bad happened';
    const expectedResult = Object.assign({}, postState, {isLoadingMorePost: false, hasFailed: true, errorDetail: errorMessage});

    expect(PostReducer(postState, {type: FAILURE_POST_LOAD_MORE, errorDetail: errorMessage})).toEqual(expectedResult);
  });

  it('should handle REQUEST_POST_SEARCH', () => {
    const searchKeyword = '#ThisIsATest';
    const expectedResult = Object.assign({}, postState, { hasSearchedForPost: true, loadingSearchPost: true, searchKeyword: searchKeyword, hasFailed: false});

    expect(PostReducer(postState, {type: REQUEST_POST_SEARCH, searchKeyword: searchKeyword})).toEqual(expectedResult);
  });

  it('should handle SUCCESS_POST_SEARCH', () => {
    const searchResult = [PostMock, PostMock, PostMock, PostMock];
    const expectedResult = Object.assign({}, postState, { searchPost: searchResult, loadingSearchPost: false});

    expect(PostReducer(postState, {type: SUCCESS_POST_SEARCH, data: searchResult})). toEqual(expectedResult);
  });

  it('should handle FAILURE_POST_SEARCH', () => {
    const errorMessage = 'something bad happened';
    const expectedResult = Object.assign({}, postState, {loadingSearchPost: false, hasFailed: true, errorDetail: errorMessage});

    expect(PostReducer(postState, {type: FAILURE_POST_SEARCH, errorDetail: errorMessage})).toEqual(expectedResult);
  });

  it('should handle REQUEST_POST_SEARCH_MORE', () => {
    const expectedResult = Object.assign({}, postState, {loadingMoreSearchPost: true, hasFailed: false});

    expect(PostReducer(postState, {type: REQUEST_POST_SEARCH_MORE})).toEqual(expectedResult);
  });

  it('should handle SUCCESS_POST_SEARCH_MORE', () => {
    const searchResult = [PostMock, PostMock, PostMock];
    const expectedResult = Object.assign({}, postState, {searchPost: searchResult, loadingMoreSearchPost: false });

    expect(PostReducer(postState, {type: SUCCESS_POST_SEARCH_MORE, data: searchResult})).toEqual(expectedResult);
  });

  it('should handle FAILURE_POST_SEARCH_MORE', () => {
    const errorMessage = 'something bad happened';
    const expectedResult = Object.assign({}, postState, {loadingMoreSearchPost: false, hasFailed: true, errorDetail: errorMessage});

    expect(PostReducer(postState, {type: FAILURE_POST_SEARCH_MORE, errorDetail: errorMessage})).toEqual(expectedResult);
  });

  it('should handle RESET_POST_SEARCH', () => {
    const expectedResult = Object.assign({}, postState, {hasSearchedForPost: false, loadingSearchPost: false, loadingMoreSearchPost: false, searchKeyword: '', hasFailed: false});

    expect(PostReducer(postState, {type: RESET_POST_SEARCH})).toEqual(expectedResult);
  });

  it('should handle REQUEST_POST_SHOW', () => {
    const postId = '111222333444'
    const expectedResult = Object.assign({}, postState, {isLoadingShowPost: true, showPostId: postId, hasFailed: false });

    expect(PostReducer(postState, {type: REQUEST_POST_SHOW, id: postId})).toEqual(expectedResult);
  });

  it('should handle SUCCESS_POST_SHOW', () => {
    const showPost = PostMock;
    const expectedResult = Object.assign({}, postState, {isLoadingShowPost: false, showPost: showPost});

    expect(PostReducer(postState, {type: SUCCESS_POST_SHOW, data: showPost})).toEqual(expectedResult);
  });

  it('should handle FAILURE_POST_SHOW', () => {
    const errorMessage = 'something bad happened';
    const expectedResult = Object.assign({}, postState, {isLoadingShowPost: false, showPostId: -1, hasFailed: true, errorDetail: errorMessage});

    expect(PostReducer(postState, {type: FAILURE_POST_SHOW, errorDetail: errorMessage})).toEqual(expectedResult);
  });

  it('should handle REQUEST_USER_PROFILE_LOAD_POST', () => {
    const expectedResult = Object.assign({}, postState, {isLoadingUserProfilePost: true, hasFailed: false});

    expect(PostReducer(postState, {type: REQUEST_USER_PROFILE_LOAD_POST})).toEqual(expectedResult);
  });

  it('should handle SUCCESS_USER_PROFILE_LOAD_POST', () => {
    const userProfilePost = [PostMock, PostMock];
    const expectedResult = Object.assign({}, postState, {isLoadingUserProfilePost: false, userProfilePost: userProfilePost});

    expect(PostReducer(postState, {type: SUCCESS_USER_PROFILE_LOAD_POST, data: userProfilePost})).toEqual(expectedResult);
  });

  it('should handle FAILURE_USER_PROFILE_LOAD_POST', () => {
    const errorMessage = 'something bad happened';
    const expectedResult = Object.assign({}, postState, {isLoadingUserProfilePost: false, hasFailed: true, errorDetail: errorMessage});

    expect(PostReducer(postState, {type: FAILURE_USER_PROFILE_LOAD_POST, errorDetail: errorMessage})).toEqual(expectedResult);
  });

});
