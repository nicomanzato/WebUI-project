import React from 'react';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';
import PropTypes from 'prop-types';
import {StackNavigator} from 'react-navigation';
import SearchForm from './../components/search/searchForm'
import ResultList from './../components/search/resultList'

const SearchScreen = ({ navigation }) => (
  <ScrollView style={styles.container}>
    <SearchForm />
    <ResultList navigation={navigation}/>
  </ScrollView>
);

SearchScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

SearchScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF'
  },
});

export default SearchScreen;
