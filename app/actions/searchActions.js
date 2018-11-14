export const TRENDS_AVAILABLE = 'TRENDS_AVAILABLE';

const serverIP = '192.168.0.111:8080';

export function getTrends(){
  return (dispatch) => {

    const url = `http://${serverIP}/trends?id=23424747`;

    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        const data = responseJson;
        dispatch({type: TRENDS_AVAILABLE, data: data[0].trends});
      })
      .catch((error) => {
        console.error(error);
      });

  }
}
