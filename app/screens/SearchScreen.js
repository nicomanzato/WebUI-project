import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import {StackNavigator} from 'react-navigation';
import SearchForm from './../components/search/searchForm'
import Trends from './../components/trends/trends'
import ResultList from './../components/search/resultList'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import {requestSearchForPost, requestSearchMorePost} from '../store/post/postActions';
import {requestTrendsLoad} from '../store/trend/trendActions';

const SearchScreen = (props) => (
  <View style={styles.container}>
    <SearchForm
      requestSearchForPost={props.requestSearchForPost}/>
    {!props.hasSearched &&
      <Trends
        loadingTrends={props.loadingTrends}
        onTrendPress={props.requestSearchForPost}
        onComponentMount={props.requestTrendsLoad}
        trends={props.trends}/>}
    {props.hasSearched &&
      <ResultList
        navigation={props.navigation}
        loadingSearch={props.loadingSearch}
        searchResult={props.searchResult}
        onEndReached={props.requestSearchMorePost}/>}
  </View>
);

SearchScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

SearchScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF'
  },
});

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        loadingTrends: false,
        trends: state.TrendReducer.trends,

        hasSearched: state.PostReducer.hasSearchedForPost,
        loadingSearch: state.PostReducer.loadingSearchPost,
        searchResult: state.PostReducer.searchPost,
        loadingMoreSearchResults: state.PostReducer.loadingMoreSearchPost,
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
const mapDispatchToProps = {
  requestTrendsLoad: () => requestTrendsLoad(),
  requestSearchForPost: (searchKeyword) => requestSearchForPost(searchKeyword),
  requestSearchMorePost: () => requestSearchMorePost(),
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
