import React from 'react';
import { StyleSheet, Text, View, Button, Animated, Easing, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import {StackNavigator} from 'react-navigation';
import SearchForm from './../components/search/searchForm'
import Trends from './../components/trends/trends'
import PostList from './../components/post/postList'
import ResultList from './../components/search/resultList'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import Fade from './../components/animation/fade'

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
      hasSearched: false,

      shouldDisplayTrends: true,
      shouldDisplaySearchResults: false,
    };

    this.trendFadeAnimatedValue = new Animated.Value(0);
    this.searchResultsFadeAnimatedValue = new Animated.Value(0);
  }

  componentDidMount = () => {
    this.props.requestTrendsLoad();
  }

  setSearchKeyword = (keyword) => {
    this.setState({
      searchKeyword: keyword,
    })
  }

  handleOnTrendPress = (trend) => {
    this.props.requestSearchForPost(trend.query);
    this.setSearchKeyword(trend.name);
  }

  render = () => {

    return (
      <View style={styles.container}>
        <SearchForm
          hasSearched={this.props.hasSearched}
          onTrendTextChange={this.setSearchKeyword}
          searchValue={this.state.searchKeyword}
          onReset={() => { this.props.resetPostSearch();  this.props.resetTrends(); this.props.requestTrendsLoad(); this.setSearchKeyword(''); }}
          onSubmit={(keyword) => {this.props.requestSearchForPost(keyword);} }/>
        {(this.props.loadingTrends || this.props.loadingSearch) &&
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator animating={true}/>
          </View>
        }
        {!this.props.loadingTrends && this.state.shouldDisplayTrends &&
          <Fade
            visible={!this.props.hasSearched}
            onDoneFadingOut={() => {this.setState({ shouldDisplayTrends: false, shouldDisplaySearchResults: true});}}>

            <Trends
              onTrendPress={(trend) => { this.handleOnTrendPress(trend) }}
              trends={this.props.trends}
            />
          </Fade>
        }
        {!this.props.loadingSearch && this.state.shouldDisplaySearchResults &&
          <Fade
            visible={this.props.hasSearched}
            onDoneFadingOut={() => {this.setState({shouldDisplaySearchResults: false, shouldDisplayTrends: true })}}>

            <PostList
              navigation={this.props.navigation}
              data={this.props.searchResult}
              onEndReached={this.props.requestSearchMorePost}
            />

          </Fade>
        }
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
