export const TIMELINE_AVAILABLE = 'TIMELINE_AVAILABLE';
export const TIMELINE_APPEND_POST = 'TIMELINE_APPEND_POST';
export const TIMELINE_LOADING_MORE_POST = 'TIMELINE_LOADING_MORE_POST';
export const START_REFRESHING_TIMELINE = 'START_REFRESHING_TIMELINE';
export const FINISH_REFRESHING_TIMELINE = 'FINISH_REFRESHING_TIMELINE';

const serverIP = '192.168.0.111:8080';

export function getTimeline(configuration){
  return (dispatch) => {

    const count = 20;
    const url = `http://${serverIP}/timeline?count=${count}`;

    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        const data = applyTimelineConfigurations(responseJson, configuration);;
        dispatch({type: TIMELINE_AVAILABLE, data: data});
      })
      .catch((error) => {
        console.error(error);
      });

  }
}

export function fetchMoreTimeline(maxID, configuration){
  return (dispatch) => {

    const count = 20;
    const url = `http://${serverIP}/timeline?count=${count}&max_id=${maxID}`;

    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        const data = applyTimelineConfigurations(responseJson, configuration);
        dispatch({type: TIMELINE_APPEND_POST, data: data.slice(1)}); // drop first result which is already loaded.
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export function startLoadingMorePost(){
  return (dispatch) => {
    dispatch({type: TIMELINE_LOADING_MORE_POST});
  }
}

export function startRefreshingTimeline(){
  return (dispatch) => {
    dispatch({type: START_REFRESHING_TIMELINE});
  }
}

export function finishRefreshingTimeline(){
  return (dispatch) => {
    dispatch({type: FINISH_REFRESHING_TIMELINE});
  }
}

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
