/**
 * Created by Guido on 12/11/2018.
 */
'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

import {connect} from 'react-redux';
import Post from '../components/Post'

class PostScreen extends Component {


  constructor(props) {
    super(props);
  }


  render() {

    return (
     <View style={styles.container}>
       <Post item={this.props.navigation.state.params.data} singlePost={true}/>
     </View>
    );
  }


}
export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff9f38',
    paddingTop: 20
  },
});