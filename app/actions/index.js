export const TIMELINE_AVAILABLE = 'TIMELINE_AVAILABLE';
export const TIMELINE_APPEND_POST = 'TIMELINE_APPEND_POST';
export const TIMELINE_LOADING_MORE_POST = 'TIMELINE_LOADING_MORE_POST';

const serverIP = '192.168.1.33:8080';

export function getTimeline(){
  return (dispatch) => {

    const count = 20;
    const url = `http://${serverIP}/timeline?count=${count}`;

    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        const data = responseJson;
        dispatch({type: TIMELINE_AVAILABLE, data: data});
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export function fetchMoreTimeline(maxID){
  return (dispatch) => {

    const count = 20;
    const url = `http://${serverIP}/timeline?count=${count}&max_id=${maxID}`;

    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        const data = responseJson;
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
