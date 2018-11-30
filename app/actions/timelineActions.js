export const REQUEST_TIMELINE_LOAD = 'REQUEST_TIMELINE_LOAD';
export const SUCCESS_TIMELINE_LOAD = 'SUCCESS_TIMELINE_LOAD';
export const REQUEST_TIMELINE_APPEND_MORE_POST = 'REQUEST_TIMELINE_APPEND_MORE_POST';
export const SUCCESS_TIMELINE_APPEND_MORE_POST = 'SUCCESS_TIMELINE_APPEND_MORE_POST';
export const REQUEST_TIMELINE_REFRESH = 'REQUEST_TIMELINE_REFRESH';
export const SUCCESS_TIMELINE_REFRESH = 'SUCCESS_TIMELINE_REFRESH';

const serverIP = '10.160.11.56:8080';

export function requestTimelineLoad() {
  return {type: REQUEST_TIMELINE_LOAD}
}

export function successTimelineLoad(data) {
  return {type: SUCCESS_TIMELINE_LOAD, data: data}
}

export function requestTimelineLoadMorePost() {
  return {type: REQUEST_TIMELINE_APPEND_MORE_POST}
}

export function successTimelineLoadMorePost(data) {
  return {type: SUCCESS_TIMELINE_APPEND_MORE_POST, data: data}
}

export function requestTimelineRefresh() {
  return {type: REQUEST_TIMELINE_REFRESH};
}

export function successTimelineRefresh() {
  return {type: SUCCESS_TIMELINE_REFRESH};
}
/*
function applyTimelineConfigurations(newPosts, configuration) {

  let posts = newPosts;

  console.log("applying configurations");

  if (configuration.configVerifiedOnly) {
    console.log("removing tweets from not verified people");
    posts = posts.filter((post) => post.user.verified);
  }

  if (configuration.configDoNotFollow) {
    console.log("removing tweets from people you don't follow");
    posts = posts.filter((post) => post.user.following);
  }

  if (configuration.configHaveDefaultInformation) {
    console.log("removing tweets from people with default information");
    posts = posts.filter((post) => !post.user.default_profile);
  }

  if (configuration.configTextTruncated) {
    console.log("removing truncated tweets");
    posts = posts.filter((post) => post.entities.following);
  }

  if (configuration.configContainsLink) {
    console.log("removing tweets that contain links");
    console.log(posts.length);
    posts = posts.filter((post) => !new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(post.text));
    console.log(posts.length);
  }

  return posts;
}
*/
