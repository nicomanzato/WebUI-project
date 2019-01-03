'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import SocialInteraction from './socialInteraction'

const postDetails = (props) => {

  const {item} = props;
  let media;

  if (item.entities.media) {
    media = item.entities.media.map((image, i) => {
      return (
       <View style={styles.mediaView} key={i}>
         <Image
          source={{uri: image.media_url_https}}
          style={styles.postImage}
          key={image.id}/>
       </View>
      );
    });
  }

  const date = formatDate(item.created_at);

  return (
   <ScrollView>
     <View style={styles.post}>

       <View style={styles.profileView}>
         <View>
           <Image
            source={{uri: item.user.profile_image_url_https}}
            style={styles.profilePic}/>
         </View>
         <View style={styles.usernameTitle}>
           <View>
             <Text style={styles.profileUsername}>{props.item.user.name}</Text>
             {props.item.user.verified === true &&
             <Ionicons name="ios-checkmark-circle" size={16} color="#1FBFFF"/>
             }
           </View>
           <View>
             <Text style={styles.profileScreenName}>@{item.user.screen_name}</Text>
           </View>
         </View>
       </View>
       <View style={styles.contentView}>
         <View style={styles.textView}>
           <Text style={styles.postContent}>
             {item.text}
           </Text>
         </View>

         { media }

         <View style={styles.dateView}>
           <Text> {date}</Text>
         </View>
         <View style={styles.separator}/>
         <SocialInteraction retweetCount={item.retweet_count} favoriteCount={item.favorite_count} />
         <View style={styles.separator}/>
       </View>

       <View style={styles.socialInteractionContainer}>
         <View style={[styles.socialInteractionElement, {backgroundColor: '#F20E49'}]}>
           <Ionicons name="ios-heart-outline" size={32} color="white"/>
         </View>
         <View style={[styles.socialInteractionElement, {backgroundColor: '#26B943'}]}>
           <Ionicons name="ios-chatboxes-outline" size={32} color="white"/>
         </View>
         <View style={[styles.socialInteractionElement, {backgroundColor: '#06B3E7'}]}>
           <Ionicons name="ios-share-alt" size={32} color="white"/>
         </View>
       </View>
     </View>
   </ScrollView>
  );
};

const formatDate = (date) => {

  return date.slice(11, 16).concat(' - ' + date.slice(8, 10))
   .concat(' ' + date.slice(4, 7) + '.').concat(' ' + date.slice(28, 30));


};

export default postDetails;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
  },

  socialInteractionContainer: {
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'space-evenly',
    paddingTop: 10,
  },

  socialInteractionElement: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 35,
    backgroundColor: 'steelblue',
    width: 65,
    height: 65,
    justifyContent: 'center'
  },

  socialInteractionText: {
    color: 'grey',
    margin: 5,
    fontSize: 15,
  },

  profileView: {
    height: 80,
    flexDirection: 'row',
  },

  contentView: {},

  usernameTitle: {
    paddingLeft: 10
  },

  profileUsername: {
    fontSize: 17,
    fontWeight: "600",
  },

  profileScreenName: {
    fontSize: 17,
    color: 'grey',
  },

  profilePic: {
    resizeMode: 'contain',
    height: 75,
    width: 75,
    borderRadius: 25,
  },

  post: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#ccc",

    padding: 10,
  },

  postContent: {
    fontSize: 19,
    paddingLeft: 5,
    fontWeight: "400",
    lineHeight: 30
  },

  postImage: {
    borderRadius: 10,
    resizeMode: 'contain',
    height: 250
  },
  textView: {

    paddingLeft: 1,

  },
  mediaView: {
    marginBottom: 10,

  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  interactionsCount: {
    flexDirection: 'row',
  },
  dateView: {
    paddingTop: 10,
    marginBottom: 10,

  },
  interactionText: {
    fontSize: 15,
    color: 'grey',
  },
  retweetCountView: {
    padding: 10,
  },
  favoriteCountView: {
    padding: 10,
    paddingLeft: 20
  }
});
