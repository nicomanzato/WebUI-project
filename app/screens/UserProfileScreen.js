'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

import {connect} from 'react-redux';
import {requestUserProfile} from '../store/user/userActions'
import UserProfile from './../components/user/userProfile'
import PostList from './../components/post/postList'

export class UserProfileScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userId: -1,
    }
  }

  componentDidMount = () => {
    const userId = this.props.navigation.getParam('userId', 'NO-ID');
    this.setState({
      userId: userId,
    });

    this.props.requestUserProfile(userId);
  }

  render = () => {
    return (
     <View style={styles.container}>
       {(this.props.isLoadingUserProfile || this.props.isLoadingUserProfilePost) &&
         <View style={styles.activityIndicatorContainer}>
           <ActivityIndicator animating={true}/>
         </View>
       }
       {!this.props.isLoadingUserProfile && !this.props.isLoadingUserProfilePost &&
         <View style={styles.userContainer}>
           <UserProfile user={this.props.user} styles={styles.userProfile} />
           <View style={styles.separator} />
           <PostList
             style={styles.postList}
             navigation={this.props.navigation}
             data={this.props.userProfilePost}
             refreshing={false}
             onRefresh={() => {}}
             onEndReached={() => {}}
           />
        </View>
       }

     </View>
    );
  }

}

function mapStateToProps(state, props) {
    return {
      isLoadingUserProfile: state.UserReducer.isLoadingUserProfile,
      user: state.UserReducer.user,

      userProfilePost: state.PostReducer.userProfilePost,
      isLoadingUserProfilePost: state.PostReducer.isLoadingUserProfilePost,
    }
}

const mapDispatchToProps = {
  requestUserProfile: (userId) => requestUserProfile(userId),
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileScreen);

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  userProfile: {
    marginBottom: 5,
  },
  postList: {
    marginTop: 5,
  },
  userContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  activityIndicatorContainer:{
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
