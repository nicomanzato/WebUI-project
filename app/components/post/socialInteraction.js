import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SocialInteraction = (props) => {
  return (
    <View style={styles.socialInteractionContainer}>
      <View style={styles.socialInteractionElement}>
        <Ionicons name="ios-heart-outline" size={32} color="grey" />
        <Text style={styles.socialInteractionText}>{props.favoriteCount}</Text>
      </View>
      <View style={styles.socialInteractionElement}>
        <Ionicons name="ios-chatboxes-outline" size={32} color="grey" />
        <Text style={styles.socialInteractionText}>0</Text>
      </View>
      <View style={styles.socialInteractionElement}>
        <Ionicons name="ios-share-alt" size={32} color="grey" />
        <Text style={styles.socialInteractionText}>{props.retweetCount}</Text>
      </View>
    </View>
  );
}

export default SocialInteraction

const styles = StyleSheet.create({
  socialInteractionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingLeft: 35,
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
});
