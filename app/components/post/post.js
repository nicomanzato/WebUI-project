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

class Post extends React.PureComponent{

  constructor(props){
    super(props);
  }

  renderMedia = () => {
    let media;
    if (this.props.item.entities.media) {
      media = this.props.item.entities.media.map((image) => {
        return(
          <Image
            source={{uri: image.media_url_https}}
            style={styles.postImage}
            fadeDuration={0}
            key={image.id}/>
        );
      });
    }

    return media;
  }

  render = () => {
    return (
      <View style={styles.post}>
        <View style={styles.row}>
          <View style={styles.profileView}>
            <TouchableHighlight
              underlayColor='#dddddd'
              onPress={() => this.props.onProfilePicPress(this.props.item.user)}
            >
              <Image
                fadeDuration={0}
                source={{uri: this.props.item.user.profile_image_url_https}}
                style={styles.profilePic}/>
            </TouchableHighlight>
          </View>
          <View style={styles.contentView}>
            <View style={styles.usernameTitle}>
              <Text style={styles.profileUsername}>{this.props.item.user.name}</Text>
              {this.props.item.user.verified === true &&
                <Ionicons name="ios-checkmark-circle" size={16} color="#1FBFFF" />
              }
              <Text style={styles.profileScreenName}> @{this.props.item.user.screen_name}</Text>
            </View>
            <Text style={styles.postContent}>
              {this.props.item.text}
            </Text>
            <View>
              { this.renderMedia() }
            </View>
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

  profileView: {
    flex: 0.2,
  },

  contentView: {
    flex: 0.8,
  },

  usernameTitle: {
    flexDirection: 'row',
  },

  profileUsername: {
    fontWeight: "600",
  },

  profileScreenName: {
    color: 'grey'
  },

  profilePic: {
    resizeMode: 'contain',
    alignSelf: 'center',
    height: 50,
    width: 50,
    borderRadius: 25,
  },

  post: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 10,
  },

  postContent:{
    fontSize: 15,
    fontWeight: "400"
  },

  postImage: {
    borderRadius: 10,
    resizeMode: 'contain',
    height: 250
  },
});
