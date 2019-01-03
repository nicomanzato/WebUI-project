'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

import {connect} from 'react-redux';
import PostDetails from '../components/post/postDetail'
import {requestPostShow} from '../store/post/postActions';

export class PostScreen extends Component {

  static navigationOptions = {
    title: 'Tweet',
  };

  constructor(props) {
    super(props);

    this.state = {
      postId: this.props.navigation.state.params.data,
    }
  }

  componentDidMount = () => {
    this.props.requestPostShow(this.state.postId);
  }

  render = () => {
    return (
     <View style={styles.container}>
       {this.props.isLoadingShowPost &&
         <View style={styles.activityIndicatorContainer}>
           <ActivityIndicator animating={true}/>
         </View>
       }
       {!this.props.isLoadingShowPost &&
         <PostDetails item={this.props.showPost}/>
       }
     </View>
    );
  }

}

function mapStateToProps(state, props) {
    return {
        isLoadingShowPost: state.PostReducer.isLoadingShowPost,
        showPost: state.PostReducer.showPost,
    }
}

const mapDispatchToProps = {
  requestPostShow: (id) => requestPostShow(id),
}

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10
  },
  activityIndicatorContainer:{
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
