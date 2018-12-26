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
  }

  handleOnProfilePicPress = () => {
    this.props.navigation.navigate('UserProfile', {userId: this.props.item.user.id_str});
  }

  render = () => {
    return (
      <View style={[styles.post, this.props.singlePost ? {height: 300} : null]}>
        <View style={styles.row}>
          <View style={styles.profileView}>
            <TouchableHighlight
              underlayColor='#dddddd'
              onPress={this.handleOnProfilePicPress}
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
            <View style={styles.socialInteractionContainer}>
              <View style={styles.socialInteractionElement}>
                <Ionicons name="ios-heart-outline" size={32} color="grey" />
                <Text style={styles.socialInteractionText}>{this.props.item.favorite_count}</Text>
              </View>
              <View style={styles.socialInteractionElement}>
                <Ionicons name="ios-chatboxes-outline" size={32} color="grey" />
                <Text style={styles.socialInteractionText}>0</Text>
              </View>
              <View style={styles.socialInteractionElement}>
                <Ionicons name="ios-share-alt" size={32} color="grey" />
                <Text style={styles.socialInteractionText}>{this.props.item.retweet_count}</Text>
              </View>
            </View>
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

  socialInteractionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingLeft: 5,
    paddingRight: 35,
  },

  socialInteractionElement: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  socialInteractionText: {
    color: 'grey',
    margin: 5,
    fontSize: 15,
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
