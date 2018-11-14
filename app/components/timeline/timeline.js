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

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../../actions';

import Post from '../Post'


class ListItem extends Component {

  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.props.onPressItem(this.props.item);
  };

  render() {
    const item = this.props.item;
    return (
     <TouchableHighlight
      onPress={this.onPress}
      underlayColor='#dddddd'>
      <Post item={item} singlePost={false}/>
     </TouchableHighlight>
    );
  }
}

class Timeline extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };

    this.renderItem = this.renderItem.bind(this);

  }

  componentDidMount = () => {
    this.props.getTimeline(this.props.configuration);
  }

  handleOnEndReached = () => {

    const data = this.props.data;

    if(data && !this.props.loadingMorePost){
      this.props.startLoadingMorePost();
      const maxID = (data[data.length - 1 ].id);
      this.props.fetchMoreTimeline(maxID, this.props.configuration);
    }
  }

  handleOnRefresh = () => {
    this.props.startRefreshingTimeline();
    this.props.getTimeline(this.props.configuration);
    this.props.finishRefreshingTimeline();
  }

  render = () => {
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
            refreshing={this.props.refreshing}
            onRefresh={this.handleOnRefresh}
            onEndReachedThreshold={10}
            onEndReached={this.handleOnEndReached}
            keyExtractor={(item, index) => index.toString()}/>
        </View>
      );
    }
  }

  onPressItem = (item) => {
    this.props.navigation.dispatch({ type: 'Post', data: item});
  };

  renderItem({item, index}) {
    return (
      <ListItem item={item} onPressItem={this.onPressItem} />
    )
  }
};



// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        loading: state.timelineReducer.loading,
        loadingMorePost: state.timelineReducer.loadingMorePost,
        refreshing: state.timelineReducer.refreshing,
        data: state.timelineReducer.timeline,

        configuration: {
          configVerifiedOnly: state.configurationReducer.configVerifiedOnly,
          configDoNotFollow: state.configurationReducer.configDoNotFollow,
          configHaveDefaultInformation: state.configurationReducer.configHaveDefaultInformation,
          configContainsLink: state.configurationReducer.configContainsLink,
          configTextTruncated: state.configurationReducer.configTextTruncated,
        }
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
});
