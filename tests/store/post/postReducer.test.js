import PostReducer, {postState}  from './../../../app/store/post/postReducer'
import * as actions from './../../../app/store/post/postActions'
import PostMock from './postMock'

describe('post reducer', () => {

  it('should return the initial state', () => {
    expect(PostReducer(undefined, {})).toEqual(postState);
  });

  it('should handle REQUEST_POST_LOAD', () => {
    const expectedResult = Object.assign({}, postState, {isLoadingPost: true, hasFailed: false });

    expect(PostReducer(postState, actions.requestLoadPost())).toEqual(expectedResult);
  });

  it ('should handle SUCCESS_POST_LOAD', () => {
    const expectedResult = Object.assign({}, postState, {isLoadingPost: false, loadedPost: [PostMock, PostMock, PostMock]});

    expect(PostReducer(postState, actions.successLoadPost([PostMock, PostMock, PostMock]))).toEqual(expectedResult);
  });

  it ('should handle FAILURE_POST_LOAD', () => {
    const errorMessage = 'something bad happened';
    const expectedResult = Object.assign({}, postState, {isLoadingPost: false, loadedPost: [], failureErrorDetail: errorMessage, hasFailed: true});

    expect(PostReducer(postState, actions.failureLoadPost(errorMessage))).toEqual(expectedResult);
  });

  it('should handle REQUEST_POST_LOAD_MORE', () => {
    const expectedResult = Object.assign({}, postState, { isLoadingMorePost: true, hasFailed: false });

    expect(PostReducer(postState, actions.requestLoadMorePost())).toEqual(expectedResult);
  });

  it('should handle SUCCESS_POST_LOAD_MORE', () => {
    const postLoaded = [PostMock, PostMock];
    const expectedResult = Object.assign({}, postState, {isLoadingMorePost: false, loadedPost: postLoaded});

    expect(PostReducer(postState, actions.successLoadMorePost(postLoaded))).toEqual(expectedResult);
  });

  it('should handle FAILURE_POST_LOAD_MORE', () => {
    const errorMessage = 'something bad happened';
    const expectedResult = Object.assign({}, postState, {isLoadingMorePost: false, hasFailed: true, failureErrorDetail: errorMessage});

    expect(PostReducer(postState, actions.failureLoadMorePost(errorMessage))).toEqual(expectedResult);
  });

  it('should handle REQUEST_POST_SEARCH', () => {
    const searchKeyword = '#ThisIsATest';
    const expectedResult = Object.assign({}, postState, { hasSearchedForPost: true, loadingSearchPost: true, searchKeyword: searchKeyword, hasFailed: false});

    expect(PostReducer(postState, actions.requestSearchForPost(searchKeyword))).toEqual(expectedResult);
  });

  it('should handle SUCCESS_POST_SEARCH', () => {
    const searchResult = [PostMock, PostMock, PostMock, PostMock];
    const expectedResult = Object.assign({}, postState, { searchPost: searchResult, loadingSearchPost: false});

    expect(PostReducer(postState, actions.successSearchForPost(searchResult))). toEqual(expectedResult);
  });

  it('should handle FAILURE_POST_SEARCH', () => {
    const errorMessage = 'something bad happened';
    const expectedResult = Object.assign({}, postState, {loadingSearchPost: false, hasFailed: true, failureErrorDetail: errorMessage});

    expect(PostReducer(postState, actions.failureSearchForPost(errorMessage))).toEqual(expectedResult);
  });

  it('should handle REQUEST_POST_SEARCH_MORE', () => {
    const expectedResult = Object.assign({}, postState, {loadingMoreSearchPost: true, hasFailed: false});

    expect(PostReducer(postState, actions.requestSearchMorePost())).toEqual(expectedResult);
  });

  it('should handle SUCCESS_POST_SEARCH_MORE', () => {
    const searchResult = [PostMock, PostMock, PostMock];
    const expectedResult = Object.assign({}, postState, {searchPost: searchResult, loadingMoreSearchPost: false });

    expect(PostReducer(postState, actions.successSearchMorePost(searchResult))).toEqual(expectedResult);
  });

  it('should handle FAILURE_POST_SEARCH_MORE', () => {
    const errorMessage = 'something bad happened';
    const expectedResult = Object.assign({}, postState, {loadingMoreSearchPost: false, hasFailed: true, failureErrorDetail: errorMessage});

    expect(PostReducer(postState, actions.failureSearchMorePost(errorMessage))).toEqual(expectedResult);
  });

  it('should handle RESET_POST_SEARCH', () => {
    const expectedResult = Object.assign({}, postState, {hasSearchedForPost: false, loadingSearchPost: false, loadingMoreSearchPost: false, searchKeyword: '', hasFailed: false});

    expect(PostReducer(postState, actions.resetPostSearch())).toEqual(expectedResult);
  });

  it('should handle REQUEST_POST_SHOW', () => {
    const postId = '111222333444'
    const expectedResult = Object.assign({}, postState, {isLoadingShowPost: true, showPostId: postId, hasFailed: false });

    expect(PostReducer(postState, actions.requestPostShow(postId))).toEqual(expectedResult);
  });

  it('should handle SUCCESS_POST_SHOW', () => {
    const showPost = PostMock;
    const expectedResult = Object.assign({}, postState, {isLoadingShowPost: false, showPost: showPost});

    expect(PostReducer(postState, actions.successPostShow(showPost))).toEqual(expectedResult);
  });

  it('should handle FAILURE_POST_SHOW', () => {
    const errorMessage = 'something bad happened';
    const expectedResult = Object.assign({}, postState, {isLoadingShowPost: false, showPostId: -1, hasFailed: true, failureErrorDetail: errorMessage});

    expect(PostReducer(postState, actions.failurePostShow(errorMessage))).toEqual(expectedResult);
  });

  it('should handle REQUEST_USER_PROFILE_LOAD_POST', () => {
    const expectedResult = Object.assign({}, postState, {isLoadingUserProfilePost: true, hasFailed: false});

    expect(PostReducer(postState, actions.requestUserProfileLoadPost())).toEqual(expectedResult);
  });

  it('should handle SUCCESS_USER_PROFILE_LOAD_POST', () => {
    const userProfilePost = [PostMock, PostMock];
    const expectedResult = Object.assign({}, postState, {isLoadingUserProfilePost: false, userProfilePost: userProfilePost});

    expect(PostReducer(postState, actions.successUserProfileLoadPost(userProfilePost))).toEqual(expectedResult);
  });

  it('should handle FAILURE_USER_PROFILE_LOAD_POST', () => {
    const errorMessage = 'something bad happened';
    const expectedResult = Object.assign({}, postState, {isLoadingUserProfilePost: false, hasFailed: true, failureErrorDetail: errorMessage});

    expect(PostReducer(postState, actions.failureUserProfileLoadPost(errorMessage))).toEqual(expectedResult);
  });

});
