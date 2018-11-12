import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import {StackNavigator} from 'react-navigation';

const ConfigScreen = ({ navigation }) => (
  <View style={styles.container}>
      <Button
        title='Back to Home 2'
        onPress={() => navigation.dispatch({ type: 'Home' })}
      />
      <Text> Config Screen </Text>
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
