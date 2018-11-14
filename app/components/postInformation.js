'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const postInformation = (props) => {

  let media;

  if (props.item.entities.media) {
    media = props.item.entities.media.map((image) => {
      return(
        <Image
          source={{uri: image.media_url_https}}
          style={styles.postImage}
          key={image.id}/>
      );
    });
  }

  return (
    <View style={styles.post}>
      <View style={styles.row}>
        <View style={styles.profileView}>
          <Image
            source={{uri: props.item.user.profile_image_url_https}}
            style={styles.profilePic}/>
        </View>
        <View style={styles.contentView}>
          <View style={styles.usernameTitle}>
            <Text style={styles.profileUsername}>{props.item.user.name}</Text>
            {props.item.user.verified == true &&
              <Ionicons name="ios-checkmark-circle" size={16} color="blue" />
            }
            <Text style={styles.profileScreenName}> @{props.item.user.screen_name}</Text>
          </View>
          <Text style={styles.postContent}>
            {props.item.text}
          </Text>
          <View>
            { media }
          </View>
        </View>
      </View>
      <View style={styles.socialInteractionContainer}>
        <View style={styles.socialInteractionElement}>
          <Ionicons name="ios-heart-outline" size={32} color="grey" />
          <Text style={styles.socialInteractionText}>{props.item.favorite_count}</Text>
        </View>
        <View style={styles.socialInteractionElement}>
          <Ionicons name="ios-chatboxes-outline" size={32} color="grey" />
          <Text style={styles.socialInteractionText}>0</Text>
        </View>
        <View style={styles.socialInteractionElement}>
          <Ionicons name="ios-share-alt" size={32} color="grey" />
          <Text style={styles.socialInteractionText}>{props.item.retweet_count}</Text>
        </View>
      </View>
    </View>
  );
}

export default postInformation;

const styles = StyleSheet.create({
  row:{
    flexDirection: 'row',
    flex: 1,
  },

  socialInteractionContainer: {
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'space-evenly',
  },

  socialInteractionElement: {
    flexDirection: 'row',
    alignItems: 'center'
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
