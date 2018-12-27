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

  const onPressItem = (item) => {
    props.navigation.dispatch({ type: 'Post', data: item.id_str});
  };

  const renderItem = ({item, index}) => {
    return (
     <PostListElement item={item} navigation={props.navigation} onPressItem={onPressItem} />
    )
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
