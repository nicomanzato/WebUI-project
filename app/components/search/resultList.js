'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ActivityIndicator
} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Trends from './../trends/trends'

import * as Actions from '../../actions';

import PostInformation from './../postInformation';

class ResultList extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount = () => {
  }

  handleOnEndReached = () => {
/*
    const data = this.props.data;

    if(data && !this.props.loadingMorePost){
      this.props.startLoadingMorePost();
      const maxID = (data[data.length - 1 ].id);
      this.props.fetchMoreTimeline(maxID, this.props.configuration);
    }
*/
  }

  render = () => {
    if (!this.props.hasSearched && !this.props.loadingSearch) return <Trends />
    if (this.props.loadingSearch) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator animating={true}/>
        </View>
      );
    } else {
      return (
        <View style={styles.searchResultList}>
          <FlatList
            ref='listRef'
            data={this.props.data}
            renderItem={this.renderItem}
            onEndReachedThreshold={10}
            onEndReached={this.handleOnEndReached}
            keyExtractor={(item, index) => index.toString()}/>
        </View>
      );
    }
  }

  renderItem({item, index}) {
    return (
      <PostInformation item={item} />
    )
  }
};



// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        hasSearched: state.searchReducer.hasSearched,
        loadingSearch: state.searchReducer.loadingSearch,
        searchResult: state.searchReducer.searchResult,
        data: state.searchReducer.searchResult,
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(ResultList);

const styles = StyleSheet.create({
  activityIndicatorContainer:{
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  searchResultList: {
    flex:1,
    backgroundColor: '#FFFFFF',
    paddingTop:20
  },
});
