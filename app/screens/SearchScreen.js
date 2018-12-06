import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import {StackNavigator} from 'react-navigation';
import SearchForm from './../components/search/searchForm'
import Trends from './../components/trends/trends'
import ResultList from './../components/search/resultList'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import {
  requestSearchForPost,
  requestSearchMorePost,
  resetPostSearch} from '../store/post/postActions';
import {requestTrendsLoad, resetTrends} from '../store/trend/trendActions';

class SearchScreen extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      searchKeyword: '',
    };
  }

  setSearchKeyword = (keyword) => {
    this.setState({
      searchKeyword: keyword,
    })
  }

  render = () => {
    return (
      <View style={styles.container}>
        <SearchForm
          hasSearched={this.props.hasSearched}
          onTrendTextChange={this.setSearchKeyword}
          searchValue={this.state.searchKeyword}
          onReset={() => { this.props.resetPostSearch(); this.props.resetTrends(); this.setSearchKeyword('') }}
          requestSearchForPost={this.props.requestSearchForPost}/>
        {!this.props.hasSearched &&
          <Trends
            loadingTrends={this.props.loadingTrends}
            onTrendPress={(trend) => {this.props.requestSearchForPost(trend.query); this.setSearchKeyword(trend.name); }}
            onComponentMount={this.props.requestTrendsLoad}
            trends={this.props.trends}/>}
        {this.props.hasSearched &&
          <ResultList
            navigation={this.props.navigation}
            loadingSearch={this.props.loadingSearch}
            searchResult={this.props.searchResult}
            onEndReached={this.props.requestSearchMorePost}/>}
      </View>
    );
  };

  static navigationOptions = {
    header: null,
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF'
  },
  activityIndicatorContainer:{
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

const mapStateToProps = (state) => {
    return {
        loadingTrends: state.TrendReducer.loadingTrends,
        trends: state.TrendReducer.trends,

        hasSearched: state.PostReducer.hasSearchedForPost,
        loadingSearch: state.PostReducer.loadingSearchPost,
        searchResult: state.PostReducer.searchPost,
        loadingMoreSearchResults: state.PostReducer.loadingMoreSearchPost,
    }
}

const mapDispatchToProps = {
  requestTrendsLoad: () => requestTrendsLoad(),
  requestSearchForPost: (searchKeyword) => requestSearchForPost(searchKeyword),
  requestSearchMorePost: () => requestSearchMorePost(),
  resetPostSearch: () => resetPostSearch(),
  resetTrends: () => resetTrends(),
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
