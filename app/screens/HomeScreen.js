import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import {getSilencedPost} from './../store/post/postSelector'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {requestLoadPost, requestLoadMorePost} from '../store/post/postActions';
import Timeline from '../components/timeline/timeline' //Import the component file

const HomeScreen = (props) => (
  <View style={styles.container}>
    <Timeline
      data={props.loadedPost}
      navigation={props.navigation}
      loading={props.loading}
      loadingMorePost={props.loadingMorePost}
      onRefresh={props.requestLoadPost}
      refreshing={false}
      onComponentMount={props.requestLoadPost}
      onEndReached={props.requestLoadMorePost}
    />
  </View>
);

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF'
  },
});

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        loading: state.PostReducer.isLoadingPost,
        loadingMorePost: state.PostReducer.isLoadingMorePost,
        loadedPost: getSilencedPost(state),
    }
}

const mapDispatchToProps = {
  requestLoadPost: () => requestLoadPost(),
  requestLoadMorePost: () => requestLoadMorePost(),
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
