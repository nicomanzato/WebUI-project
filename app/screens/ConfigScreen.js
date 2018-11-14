import React from 'react';
import { StyleSheet, Text, View, Button, CheckBox } from 'react-native';
import PropTypes from 'prop-types';
import {StackNavigator} from 'react-navigation';

import ConfigList from './../components/configuration/ConfigList';

const ConfigScreen = ({ navigation }) => (
  <View style={styles.container}>
    <ConfigList />
  </View>
);

ConfigScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

ConfigScreen.navigationOptions = {

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF'
  },
});

export default ConfigScreen;
