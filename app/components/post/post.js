'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SocialInteraction from './socialInteraction'
import {PostContent} from './postComponent/postContent'
import {PostMedia} from './postComponent/postMedia'
import {PostProfilePicture} from './postComponent/postProfilePicture'
import {PostUserInformation} from './postComponent/postUserInformation'

class Post extends React.PureComponent{

  constructor(props){
    super(props);
  }

  handleOnProfilePicPress = () => {
    this.props.onProfilePicPress(this.props.item.user);
  }

  render = () => {
    return (
      <View style={styles.post}>
        <View style={styles.row}>
          <PostProfilePicture user={this.props.item.user} onProfilePicPress={this.handleOnProfilePicPress}/>
          <View style={styles.contentView}>
            <PostUserInformation user={this.props.item.user}/>
            <PostContent post={this.props.item} />
            <PostMedia post={this.props.item} />
            <SocialInteraction
              favoriteCount={this.props.item.favorite_count}
              retweetCount={this.props.item.retweet_count}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Post;

const styles = StyleSheet.create({
  row:{
    flexDirection: 'row',
    flex: 1,
  },

  contentView: {
    flex: 0.8,
  },

  post: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 10,
  },

});
