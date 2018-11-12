import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import {StackNavigator} from 'react-navigation';

const SearchScreen = ({ navigation }) => (
  <View style={styles.container}>
      <Button
        title='Back to Home'
        onPress={() => navigation.dispatch({ type: 'Home' })}
      />
      <Text> Categories Screen </Text>
    </View>
);

SearchScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

SearchScreen.navigationOptions = {

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF'
  },
});

export default SearchScreen;
