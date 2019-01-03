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

const PostList = (props) => {

  const handleOnProfilePicPress = (user) => {
    props.navigation.navigate('UserProfile', {userId: user.id_str});
  }

  const handleOnPressItem = (item) => {
    props.navigation.dispatch({ type: 'Post', data: item.id_str});
  };

  const renderItem = ({item, index}) => {
    return (
     <PostListElement item={item} navigation={props.navigation} onProfilePicPress={handleOnProfilePicPress} onPressItem={handleOnPressItem} />
    );
  }

  return (
    <FlatList
      data={props.data}
      renderItem={renderItem}
      refreshing={props.refreshing}
      onRefresh={props.onRefresh}
      onEndReachedThreshold={5}
      onEndReached={props.onEndReached}
      keyExtractor={(item, index) => index.toString()}/>
  );
}

export default PostList
