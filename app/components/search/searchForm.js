import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import {StackNavigator} from 'react-navigation';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import * as Actions from '../../actions/searchActions';

class SearchForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      searchKeyword: '',
    }
  }

  handleOnPress = () => {
    this.props.requestSearchResultLoad(this.state.searchKeyword);
  }

  render = () => {
    return (
     <View style={styles.container}>
       <View style={styles.textInputView}>
         <Ionicons name="ios-search" size={32} color="#1183ff"/>
         <TextInput
          underlineColorAndroid="transparent"
          style={styles.searchTextInput}
          onChangeText={(searchKeyword) => this.setState({searchKeyword})}
          value={this.state.searchKeyword}
         />
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
    height: 80,
    flexDirection: 'row',
    backgroundColor: '#FFFF',
    justifyContent: 'space-evenly',
    paddingTop: 17,
    paddingLeft: 5,
    paddingRight: 5,

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
