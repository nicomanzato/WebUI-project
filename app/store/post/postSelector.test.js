import {postState} from './postReducer'
import {configurationState} from './../configuration/configurationReducer'
import * as selectors from './postSelector';
import PostMock from './mock/postMock'
import PostMock2 from './mock/postMock2'
import PostMock3 from './mock/postMock3'

let testState = {};

const generateTestPostState = () => {
  testState.PostReducer = postState;
  testState.PostReducer.loadedPost = [PostMock, PostMock2, PostMock3, PostMock2, PostMock, PostMock3];
  testState.PostReducer.searchKeyword = '#thisIsATest';
  testState.PostReducer.searchPost = [PostMock, PostMock3, PostMock2];
  testState.PostReducer.showPostId = PostMock.id;
}

const generateTestConfigurationState = () => {
  testState.ConfigurationReducer = configurationState;
  testState.ConfigurationReducer.configVerifiedOnly = false;
  testState.ConfigurationReducer.configDoNotFollow = false;
  testState.ConfigurationReducer.configHaveDefaultInformation = false;
  testState.ConfigurationReducer.configContainsLink = false;
  testState.ConfigurationReducer.configTextTruncated = false;
}

describe('post selector', () => {
  beforeEach(() => {
    generateTestPostState();
    generateTestConfigurationState();
  });

  it('should select the last PostId', () => {
    expectedResult = PostMock3.id;

    expect(selectors.getLastPostId(testState)).toEqual(expectedResult);
  });

  it('should select all loaded post', () => {
    expectedResult = [PostMock, PostMock2, PostMock3, PostMock2, PostMock, PostMock3];

    expect(selectors.getLoadedPost(testState)).toEqual(expectedResult);
  });

  it('should select the search keyword', () => {
    expectedResult = '#thisIsATest';

    expect(selectors.getSearchKeyword(testState)).toEqual(expectedResult);
  });

  it('should select the last search post id', () => {
    expectedResult = 1076097967147360300;

    expect(selectors.getLastSearchResultId(testState)).toEqual(expectedResult);
  });

  it('should select the show post id', () => {
    expectedResult = 1075754427368333300;

    expect(selectors.getShowPostId(testState)).toEqual(expectedResult);
  });

  it('should select the post whose author has a verified account',() => {
    expectedResult = [PostMock, PostMock3, PostMock, PostMock3];
    testState.ConfigurationReducer.configVerifiedOnly = true;

    expect(selectors.getNotSilencedPost(testState)).toEqual(expectedResult);
  });

  it('should select the post whose author you follow', () => {
    expectedResult = [PostMock2, PostMock3, PostMock2, PostMock3];
    testState.ConfigurationReducer.configDoNotFollow = true;

    expect(selectors.getNotSilencedPost(testState)).toEqual(expectedResult);
  });

  it('should select the post whose author does not have a default profile', () => {
    expectedResult = [PostMock2, PostMock3, PostMock2, PostMock3];
    testState.ConfigurationReducer.configHaveDefaultInformation = true;

    expect(selectors.getNotSilencedPost(testState)).toEqual(expectedResult);
  });

  it('should select the post that do not have their text truncated', () => {
    expectedResult = [PostMock2, PostMock3, PostMock2, PostMock3];
    testState.ConfigurationReducer.configTextTruncated = true;

    expect(selectors.getNotSilencedPost(testState)).toEqual(expectedResult);
  });

  it('should select the post that do not contain links', () => {
    expectedResult = [PostMock3, PostMock3];
    testState.ConfigurationReducer.configContainsLink = true;

    expect(selectors.getNotSilencedPost(testState)).toEqual(expectedResult);
  });

  it('should select all avialable post with no filter', () => {
    expectedResult = [PostMock, PostMock2, PostMock3, PostMock2, PostMock, PostMock3];

    expect(selectors.getNotSilencedPost(testState)).toEqual(expectedResult);
  });
});
