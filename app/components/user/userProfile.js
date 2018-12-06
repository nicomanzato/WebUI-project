import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const UserProfile = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: props.user.profile_banner_url}}
        style={styles.banner}
      />
      <View style={styles.row}>
        <Image
          source={{uri: props.user.profile_image_url_https}}
          style={styles.profilePic}
        />
        <View style={styles.userName}>
          <Text style={styles.userNameText}> {props.user.name} </Text>
        </View>
      </View>
    </View>
  );
}

export default UserProfile

const styles = StyleSheet.create({
  banner:{
    resizeMode: 'contain',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 4.5,
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  userName: {
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
  },

  userNameText: {
    fontSize: 16,
  },

  profilePic: {
    resizeMode: 'contain',
    alignSelf: 'center',
    height: 50,
    width: 50,
    borderRadius: 25,
  },

  row:{
    flexDirection: 'row',
  },
});
