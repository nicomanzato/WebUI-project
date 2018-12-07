'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ActivityIndicator,
  TouchableHighlight
} from 'react-native';

import PostList from './../post/postList'

class ResultList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = () => {
    this.props.onComponentMount();
  }

  render(){
    if (this.props.loadingSearch) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator animating={true}/>
        </View>
      );
    } else {
      return (
        <View style={styles.searchResultList}>
          <PostList
            navigation={this.props.navigation}
            data={this.props.searchResult}
            onEndReached={this.props.onEndReached}
          />
        </View>
      );
    }
  }
}

export default ResultList;

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
