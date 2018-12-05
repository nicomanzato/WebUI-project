import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ActivityIndicator,
  TouchableHighlight
} from 'react-native';

import Post from './post'

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
      onPress={(this.onPress)}
      underlayColor='#dddddd'>
      <Post item={item} singlePost={false}/>
     </TouchableHighlight>
    );
  }
}

const PostList = (props) => {

  const onPressItem = (item) => {
    props.navigation.dispatch({ type: 'Post', data: item});
  };

  const renderItem = ({item, index}) => {
    return (
     <ListItem item={item} onPressItem={onPressItem} />
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
