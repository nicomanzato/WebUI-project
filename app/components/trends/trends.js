'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ActivityIndicator
} from 'react-native';

import TrendList from './trendList';

class Trends extends Component {

  componentDidMount = () => {
    this.props.onComponentMount();
  }

  componentWillUnmount = () => {
    //this.props.onComponentWillUnmount();
  }

  render = () => {
      return (
       <View>
         <Text style={styles.trendTitle}>Trends for you</Text>
         <View style={styles.separator}/>
         <TrendList
           trends={this.props.trends}
           onItemPress={this.props.onTrendPress}
         />
       </View>
      )
  }
};

export default Trends;

const styles = StyleSheet.create({
  activityIndicatorContainer:{
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  timeline: {
    flex:1,
    backgroundColor: '#FFFFFF',
    paddingTop:20
  },
  trendTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 15
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
});
