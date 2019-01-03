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

class PostListElement extends React.PureComponent {

  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  };

  onPress() {
    this.props.onPressItem(this.props.item);
  };

  render() {
    const item = this.props.item;
    return (
     <TouchableHighlight
      onPress={this.onPress}
      underlayColor='#dddddd'>
      <Post item={item} onProfilePicPress={this.props.onProfilePicPress} navigation={this.props.navigation}/>
     </TouchableHighlight>
    );
  };
}

export default PostListElement
