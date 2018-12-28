import * as actions from './postActions'
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
} from './postActions'

import PostMock from './mock/postMock'

describe('post actions', () => {

  it('should generate REQUEST_POST_LOAD', () => {
    const expectedResult = {type: REQUEST_POST_LOAD};

    expect(actions.requestLoadPost()).toEqual(expectedResult);
  });

  it('should generate SUCCESS_POST_LOAD', () => {
    const postList = [PostMock, PostMock, PostMock];
    const expectedResult = {type: SUCCESS_POST_LOAD, data: postList};

    expect(actions.successLoadPost(postList)).toEqual(expectedResult);
  });

  it('should generate FAILURE_POST_LOAD', () => {
    const errorMessage = 'something bad happened';
    const expectedResult = {type: FAILURE_POST_LOAD, errorDetail: errorMessage};

    expect(actions.failureLoadPost(errorMessage)).toEqual(expectedResult);
  });

  it('should generate REQUEST_POST_LOAD_MORE', () => {
    const expectedResult = {type: REQUEST_POST_LOAD_MORE};

    expect(actions.requestLoadMorePost()).toEqual(expectedResult);
  });

  it('should generate SUCCESS_POST_LOAD_MORE', () => {
    const postList = [PostMock, PostMock, PostMock];
    const expectedResult = {type: SUCCESS_POST_LOAD_MORE, data: postList}

    expect(actions.successLoadMorePost(postList)).toEqual(expectedResult);
  });

  it('should generate FAILURE_POST_LOAD_MORE', () => {
    const errorMessage = 'something bad happened';
    const expectedResult = {type: FAILURE_POST_LOAD_MORE, errorDetail: errorMessage}

    expect(actions.failureLoadMorePost(errorMessage)).toEqual(expectedResult);
  });

  it('should generate REQUEST_POST_SEARCH', () => {
    const searchKeyword = '#ThisIsATest';
    const expectedResult = {type: REQUEST_POST_SEARCH, searchKeyword: searchKeyword};

    expect(actions.requestSearchForPost(searchKeyword)).toEqual(expectedResult);
  });

  it('should generate SUCCESS_POST_SEARCH', () => {
    const searchResult = [PostMock, PostMock, PostMock];
    const expectedResult = {type: SUCCESS_POST_SEARCH, data: searchResult};

    expect(actions.successSearchForPost(searchResult)).toEqual(expectedResult);
  });

  it('should generate FAILURE_POST_SEARCH', () => {
    const errorMessage = 'something bad happened';
    const expectedResult = {type: FAILURE_POST_SEARCH, errorDetail: errorMessage};

    expect(actions.failureSearchForPost(errorMessage)).toEqual(expectedResult);
  });

  it('should generate REQUEST_POST_SEARCH_MORE', () => {
    const expectedResult = {type: REQUEST_POST_SEARCH_MORE};

    expect(actions.requestSearchMorePost()).toEqual(expectedResult);
  });

  it('should generate SUCCESS_POST_SEARCH_MORE', () => {
    const searchResult = [PostMock, PostMock, PostMock]
    const expectedResult = {type: SUCCESS_POST_SEARCH_MORE, data: searchResult};

    expect(actions.successSearchMorePost(searchResult)).toEqual(expectedResult);
  });

  it('should generate FAILURE_POST_SEARCH_MORE', () => {
    const errorMessage = 'something bad happened';
    const expectedResult = {type: FAILURE_POST_SEARCH_MORE, errorDetail: errorMessage};

    expect(actions.failureSearchMorePost(errorMessage)).toEqual(expectedResult);
  });

  it('should generate RESET_POST_SEARCH', () => {
    const expectedResult = {type: RESET_POST_SEARCH};

    expect(actions.resetPostSearch()).toEqual(expectedResult);
  });

  it('should generate REQUEST_POST_SHOW', () => {
    const postId = '111222333';
    const expectedResult = {type: REQUEST_POST_SHOW, id: postId};

    expect(actions.requestPostShow(postId)).toEqual(expectedResult);
  });

  it('should generate SUCCESS_POST_SHOW', () => {
    const searchResult = PostMock;
    const expectedResult = {type: SUCCESS_POST_SHOW, data: searchResult};

    expect(actions.successPostShow(searchResult)).toEqual(expectedResult);
  });

  it('should generate FAILURE_POST_SHOW', () => {
    const errorMessage = 'something bad happened';
    const expectedResult = {type: FAILURE_POST_SHOW, errorDetail: errorMessage};

    expect(actions.failurePostShow(errorMessage)).toEqual(expectedResult);
  });

  it('should generate REQUEST_USER_PROFILE_LOAD_POST', () => {
    const expectedResult = {type: REQUEST_USER_PROFILE_LOAD_POST};

    expect(actions.requestUserProfileLoadPost()).toEqual(expectedResult);
  });

  it('should generate SUCCESS_USER_PROFILE_LOAD_POST', () => {
    const userProfilePost = [PostMock, PostMock, PostMock,PostMock];
    const expectedResult = {type: SUCCESS_USER_PROFILE_LOAD_POST, data: userProfilePost};

    expect(actions.successUserProfileLoadPost(userProfilePost)).toEqual(expectedResult);
  });

  it('should generate FAILURE_USER_PROFILE_LOAD_POST', () => {
    const errorMessage = 'something bad happened';
    const expectedResult = {type: FAILURE_USER_PROFILE_LOAD_POST, errorDetail: errorMessage};

    expect(actions.failureUserProfileLoadPost(errorMessage)).toEqual(expectedResult);
  });
});
