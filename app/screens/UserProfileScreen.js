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

class UserProfileScreen extends Component {

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
           <View style={styles.userProfile}>
             <UserProfile user={this.props.user} />
           </View>
           <View style={styles.postList}>
             <PostList
               navigation={this.props.navigation}
               data={this.props.userProfilePost}
               refreshing={false}
               onRefresh={() => {}}
               onEndReached={() => {}}
             />
           </View>
        </View>
       }

     </View>
    );
  }

}

/*
<View style={styles.userProfile}>
  <UserProfile user={this.props.user} />
</View>
<View style={styles.postList}>
  <PostList
    navigation={this.props.navigation}
    data={this.props.userProfilePost}
    refreshing={false}
    onRefresh={() => {}}
    onEndReached={() => {}}
  />
</View>
*/

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
  userProfile: {
    flex: 0.3,
  },
  postList: {
    flex: 0.6,
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
