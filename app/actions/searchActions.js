export const TRENDS_AVAILABLE = 'TRENDS_AVAILABLE';
export const SEARCH_RESULTS_AVAILABLE = 'SEARCH_RESULTS_AVAILABLE';
export const START_SEARCH_FOR_RESULTS = 'START_SEARCH_FOR_RESULTS';
export const SEARCH_APPEND_MORE_POST = 'SEARCH_APPEND_MORE_POST';
export const SEARCH_LOADING_MORE_SEARCH_RESULTS = 'SEARCH_LOADING_MORE_SEARCH_RESULTS';

const serverIP = '192.168.1.33:8080';

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

export function searchForValue(searchValue){
  return (dispatch) => {

    const url = `http://${serverIP}/search?q=${searchValue}`;

    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        const data = responseJson;
        dispatch({type: SEARCH_RESULTS_AVAILABLE, data: data.statuses, searchValue: searchValue});
      })
      .catch((error) => {
        console.error(error);
      });

  }
}

export function fetchMoreSearchResults(maxID, searchValue){
  return (dispatch) => {

    const count = 20;
    const url = `http://${serverIP}/search?q=${searchValue}&max_id=${maxID}&count=${count}`;

    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        const data = responseJson;
        dispatch({type: SEARCH_APPEND_MORE_POST, data: data.statuses}); // drop first result which is already loaded.
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export function startLoadingMoreSearchResults(){
  return (dispatch) => {
    dispatch({type: SEARCH_LOADING_MORE_SEARCH_RESULTS});
  }
}

export function startSearch(){
  return (dispatch) => {
    dispatch({type: START_SEARCH_FOR_RESULTS});
  }
}
