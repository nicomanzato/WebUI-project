import {getConfiguration} from './../configuration/configurationSelector'
import {getUserProfileId} from './../user/userSelector'

export const getLastPostId = state => {
  const loadedPost = state.PostReducer.loadedPost;
  if (loadedPost[loadedPost.length - 1]) return loadedPost[loadedPost.length - 1].id;
  return -1;
}

export const getLoadedPost = state => {
  return state.PostReducer.loadedPost;
}

export const getSearchKeyword = state => {
  return state.PostReducer.searchKeyword;
}

export const getLastSearchResultId = state => {
  const searchPost = state.PostReducer.searchPost;
  return searchPost[searchPost.length - 1].id;
}

export const getShowPostId = state => {
  return state.PostReducer.showPostId;
}

export const getNotSilencedPost = (state) => {

  const configuration = getConfiguration(state);
  const posts = getLoadedPost(state);
  return posts.filter((post) => {

    if (configuration.configVerifiedOnly && !post.user.verified) { return false; }
    if (configuration.configDoNotFollow && !post.user.following) { return false; }
    if (configuration.configHaveDefaultInformation && post.user.default_profile) { return false; }
    if (configuration.configTextTruncated && post.truncated) { return false; }
    if (configuration.configContainsLink && post.entities.urls.length > 0){ return false; }

    return true;

  });
}
