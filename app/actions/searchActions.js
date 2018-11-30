export const REQUEST_TRENDS_LOAD = 'REQUEST_TRENDS_LOAD'
export const SUCCESS_TRENDS_LOAD = 'SUCCESS_TRENDS_LOAD';
export const SUCCESS_SEARCH_RESULTS_LOAD = 'SUCCESS_SEARCH_RESULTS_LOAD';
export const REQUEST_SEARCH_RESULTS_LOAD = 'REQUEST_SEARCH_RESULTS_LOAD';
export const SUCCESS_SEARCH_APPEND_MORE_POST = 'SUCCESS_SEARCH_APPEND_MORE_POST';
export const REQUEST_SEARCH_APPEND_MORE_POST = 'REQUEST_SEARCH_APPEND_MORE_POST';

const serverIP = '10.160.11.56:8080';

export function requestTrendsLoad() {
  return { type: REQUEST_TRENDS_LOAD }
}

export function successTrendsLoad(data) {
  return { type: SUCCESS_TRENDS_LOAD, data: data }
}

export function requestSearchResultLoad(keyword) {
  return { type: REQUEST_SEARCH_RESULTS_LOAD, searchKeyword: keyword }
}

export function successSearchResultsLoad(data, searchKeyword) {
  return { type: SUCCESS_SEARCH_RESULTS_LOAD, data: data, searchKeyword: searchKeyword}
}
/*
export function getTrends(){
  return (dispatch) => {

    const url = `http://${serverIP}/trends?id=23424747`;

    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        const data = responseJson;
        dispatch({type: SUCCESS_TRENDS_LOAD, data: data[0].trends});
      })
      .catch((error) => {
        console.error(error);
      });

  }
}

export function searchForValue(searchKeyword){
  return (dispatch) => {

    const url = `http://${serverIP}/search?q=${searchKeyword}`;

    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        const data = responseJson;
        dispatch({type: SUCCESS_SEARCH_RESULTS_LOAD, data: data.statuses, searchKeyword: searchKeyword});
      })
      .catch((error) => {
        console.error(error);
      });

  }
}

export function fetchMoreSearchResults(maxID, searchKeyword){
  return (dispatch) => {

    const count = 20;
    const url = `http://${serverIP}/search?q=${searchKeyword}&max_id=${maxID}&count=${count}`;

    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        const data = responseJson;
        dispatch({type: SUCCESS_SEARCH_APPEND_MORE_POST, data: data.statuses}); // drop first result which is already loaded.
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export function startLoadingMoreSearchResults(){
  return (dispatch) => {
    dispatch({type: REQUEST_SEARCH_APPEND_MORE_POST});
  }
}

export function startSearch(){
  return (dispatch) => {
    dispatch({type: REQUEST_SEARCH_RESULTS_LOAD});
  }
}
*/
