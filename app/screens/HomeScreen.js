import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import Timeline from '../components/timeline/Timeline' //Import the component file

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Timeline navigation={navigation}/>
  </View>
);

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

HomeScreen.navigationOptions = {
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF44'
  },
});

export default HomeScreen;
