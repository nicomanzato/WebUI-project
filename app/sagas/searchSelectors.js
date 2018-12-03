export const getSearchKeyword = state => {
  return state.searchReducer.searchKeyword;
}

export const getLastSearchResultId = state => {
  const searchResults = state.searchReducer.searchResult;
  return searchResults[searchResults.length - 1].id;
}
