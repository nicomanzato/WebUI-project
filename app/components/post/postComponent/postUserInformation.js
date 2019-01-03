import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const PostUserInformation = (props) => {
  return (
    <View style={styles.usernameTitle}>
      <Text style={styles.profileUsername}>{props.user.name}</Text>
      {props.user.verified === true &&
        <Ionicons name="ios-checkmark-circle" size={16} color="#1FBFFF" />
      }
      <Text style={styles.profileScreenName}> @{props.user.screen_name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  usernameTitle: {
    flexDirection: 'row',
  },

  profileUsername: {
    fontWeight: "600",
  },

  profileScreenName: {
    color: 'grey'
  },

});
