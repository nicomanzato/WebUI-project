import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

export const PostMedia = (props) => {

  const renderMedia = (media) => {
    let output;
    if (media) {
      output = media.map((image) => {
        return(
          <Image
            source={{uri: image.media_url_https}}
            style={styles.postImage}
            fadeDuration={0}
            key={image.id}/>
        );
      });
    }

    return output;
  }

  return (
    <View>
      { renderMedia(props.post.entities.media) }
    </View>
  );
}

const styles = StyleSheet.create({

  postImage: {
    borderRadius: 10,
    resizeMode: 'contain',
    height: 250
  },

});
