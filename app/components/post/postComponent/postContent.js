import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

export const PostContent = (props) => {
  return (
    <Text style={styles.postContent}>
      {props.post.text}
    </Text>
  );
}

const styles = StyleSheet.create({

  postContent:{
    fontSize: 15,
    fontWeight: "400"
  },

});
