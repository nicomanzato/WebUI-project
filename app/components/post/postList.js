import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ActivityIndicator,
  TouchableHighlight
} from 'react-native';

import PostListElement from './postListElement'

class PostList extends React.PureComponent{

  handleOnProfilePicPress = (user) => {
    this.props.navigation.navigate('UserProfile', {userId: user.id_str});
  }

  handleOnPressItem = (item) => {
    this.props.navigation.dispatch({ type: 'Post', data: item.id_str});
  };

  renderItem = ({item, index}) => {
    return (
     <PostListElement item={item} navigation={this.props.navigation} onProfilePicPress={this.handleOnProfilePicPress} onPressItem={this.handleOnPressItem} />
    );
  }

  render = () => {
    return (
      <FlatList
        data={this.props.data}
        renderItem={this.renderItem}
        refreshing={this.props.refreshing}
        onRefresh={this.props.onRefresh}
        onEndReachedThreshold={5}
        onEndReached={this.props.onEndReached}
        keyExtractor={(item, index) => index.toString()}/>
    );
  }
}

export default PostList
