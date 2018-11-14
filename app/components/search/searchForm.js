import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import {StackNavigator} from 'react-navigation';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../../actions/searchActions';

class SearchForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      searchValue: '',
    }
  }

  handleOnPress = () => {
    this.props.startSearch();
    this.props.searchForValue(this.state.searchValue);
  }

  render = () => {
    return (
      <View style={styles.container}>
        <TextInput
          underlineColorAndroid="transparent"
          style={styles.searchTextInput}
          onChangeText={(searchValue) => this.setState({searchValue})}
          value={this.state.searchValue}
        />
        <TouchableHighlight
          style={styles.searchButton}
          onPress={this.handleOnPress}>
          <Text style={styles.searchButtonText}> Search </Text>
        </TouchableHighlight>
      </View>
    );
  }
};



// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {

    return {

    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#FFFF',
    margin: 30,
    justifyContent: 'space-evenly'
  },
  searchTextInput: {
    flex: 0.5,
    fontSize: 20,
    padding:5,
    borderWidth: 2,
    borderColor: 'black',
  },
  searchButton: {
    flex: 0.3,
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10
  },
  searchButtonText: {
    color: 'white',
    fontSize: 20,
  },
});
