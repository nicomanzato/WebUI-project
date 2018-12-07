import React from 'react';
import { StyleSheet, Text, View, Button, Animated, Easing, ActivityIndicator } from 'react-native';
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
      hasSearched: false,
    };

    this.trendFadeAnimatedValue = new Animated.Value(0);
    this.searchResultsFadeAnimatedValue = new Animated.Value(0);
    this.props.requestTrendsLoad();
  }

  handleOnTrendMount = () => {
    this.startTrendFadeInAnimation();
  }

  handleOnTrendUnmount = () => {
    this.startTrendFadeOutAnimation();
    setTimeout(1500);
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
          onReset={() => { this.props.resetPostSearch(); /* this.props.resetTrends(); */ this.setSearchKeyword(''); }}
          onSubmit={(keyword) => {this.props.requestSearchForPost(keyword);} }/>
        { (this.props.loadingTrends || this.props.loadingSearch) &&
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator animating={true}/>
          </View>
        }
        {!this.props.hasSearched && !this.props.loadingTrends &&
          <Animated.View style={{opacity: this.trendFadeAnimatedValue, flex: 1}}>
            <Trends
              onTrendPress={(trend) => { this.handleOnTrendPress(trend) }}
              onComponentMount={this.handleOnTrendMount}
              onComponentWillUnmount={this.handleOnTrendUnmount}
              trends={this.props.trends}
            />
          </Animated.View>
        }
        {this.props.hasSearched && !this.props.loadingSearch &&
          <Animated.View style={{opacity: this.searchResultsFadeAnimatedValue, flex: 1}}>
            <ResultList
              onComponentMount={this.startSearchResultsFadeInAnimation}
              navigation={this.props.navigation}
              loadingSearch={this.props.loadingSearch}
              searchResult={this.props.searchResult}
              onEndReached={this.props.requestSearchMorePost}/>
          </Animated.View>
        }
      </View>
    );
  };

//*************************************************
//******************* ANIMATION *******************
//*************************************************

  startTrendFadeInAnimation = () => {
    this.trendFadeAnimatedValue.setValue(0);
    Animated.timing(
      this.trendFadeAnimatedValue,
      {
        toValue: 1,
        duration: 1500,
        easing: Easing.in,
      }
    ).start();
  }

  startTrendFadeOutAnimation = () => {
    this.trendFadeAnimatedValue.setValue(1);
    Animated.timing(
      this.trendFadeAnimatedValue,
      {
        toValue: 0,
        duration: 1500,
        easing: Easing.linear,
      }
    ).start(() => this.setState({hasSearched: true}));
  }

  startSearchResultsFadeInAnimation = () => {
    this.searchResultsFadeAnimatedValue.setValue(0);
    Animated.timing(
      this.searchResultsFadeAnimatedValue,
      {
        toValue: 1,
        duration: 1500,
        easing: Easing.in,
      }
    ).start();
  }

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
