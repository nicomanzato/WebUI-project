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

import * as Actions from '../../actions'; //Import your actions

import PostInformation from './postInformation'

class Timeline extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount() {
    this.props.getTimeline();
  }

  render() {
    if (this.props.loading) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator animating={true}/>
        </View>
      );
    } else {
      return (
        <View style={styles.timeline}>
          <FlatList
            ref='listRef'
            data={this.props.data}
            renderItem={this.renderItem}
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
        loading: state.timelineReducer.loading,
        data: state.timelineReducer.timeline
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Timeline);

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

  row:{
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 10,
  },

  usernameTitle: {
    flexDirection: 'row',
    padding: 1,
  },

  tweetUsername: {
    fontWeight: "600",

  },

  tweetScreenName: {
    color: 'grey'
  },

  tweetContent:{
    fontSize: 15,
    fontWeight: "400"
  },
});
