import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import {StackNavigator} from 'react-navigation';
import SearchForm from './../components/search/searchForm'
import ResultList from './../components/search/resultList'

const SearchScreen = ({ navigation }) => (
  <View style={styles.container}>
    <SearchForm />
    <ResultList />
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
