'use strict';

import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import {StackNavigator} from 'react-navigation';
import Fade from './../animation/fade'
import { Ionicons } from '@expo/vector-icons';

class SearchForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      searchKeyword: '',
    }
  }

  handleOnPress = () => {
    this.props.onSubmit(this.state.searchKeyword.replace(/#/, '%23'));
  }

  onReset = () => {
    this.props.onReset();
    this.setState({
      searchKeyword: '',
    })
  }

  render = () => {
    return (
     <View style={styles.container}>
       <View style={styles.textInputView}>
         <Ionicons name="ios-search" size={32} color="#1183ff"/>
         <TextInput
          underlineColorAndroid="transparent"
          style={styles.searchTextInput}
          onChangeText={(searchKeyword) => {this.setState({searchKeyword}); this.props.onTrendTextChange(searchKeyword);}}
          value={this.props.searchValue}
         />
         { this.props.hasSearched && 
           <Ionicons name="ios-close" style={styles.icon} onPress={this.onReset} size={32} color="#1183ff"/>
         }
       </View>
       <TouchableHighlight
        style={styles.searchButton}
        onPress={this.handleOnPress}>
         <Text style={styles.searchButtonText}> Search </Text>
       </TouchableHighlight>
     </View>
    );
  }
};

export default SearchForm;

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    backgroundColor: '#FFFF',
    justifyContent: 'space-evenly',
    paddingTop: 17,
    paddingLeft: 5,
    paddingRight: 5,
  },
  icon: {
    padding: 5,
  },
  searchTextInput: {
    flex: 1,
    fontSize: 17,
    padding: 5,
    marginLeft: 3
  },
  searchButton: {
    flex: 0.25,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1FBFFF',
    borderRadius: 5,
  },
  searchButtonText: {
    color: 'white',
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  textInputView: {
    flex: 0.65,
    height: 40,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
    padding: 1,
    paddingLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
