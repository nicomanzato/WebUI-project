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

import * as Actions from '../../actions/trendActions';
import {requestSearchResultLoad} from '../../actions/searchActions';

import TrendList from './trendList';

class Trends extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount = () => {
    this.props.requestTrendsLoad();
  }

  render = () => {
    if (this.props.loadingTrends) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator animating={true}/>
        </View>
      );
    } else {
      return (
       <View>

         <Text style={styles.trendTitle}>Trends for you</Text>
         <View style={styles.separator}/>
         <TrendList
           trends={this.props.trends}
           onItemPress={this.props.requestSearchResultLoad}/>

       </View>
      )
    }
  }
};



// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        loadingTrends: state.trendReducer.loadingTrends,
        trends: state.trendReducer.trends,
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
  Actions.requestSearchResultLoad = requestSearchResultLoad;
  return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Trends);

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
