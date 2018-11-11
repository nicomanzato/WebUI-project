export const TIMELINE_AVAILABLE = 'TIMELINE_AVAILABLE';

const serverIP = '192.168.0.111:8080';

export function getTimeline(){
  return (dispatch) => {

    const count = 100;
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
