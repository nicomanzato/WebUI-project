import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Animated,
  Image,
  TouchableHighlight,
  Easing } from 'react-native';
import PropTypes from 'prop-types';
import {getSilencedPost} from './../store/post/postSelector'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {requestLoadPost, requestLoadMorePost} from '../store/post/postActions';
import Timeline from '../components/timeline/timeline' //Import the component file

const arr = []
for (var i = 0; i < 500; i++) {
  arr.push(i)
}

class AnimatedScreen extends React.Component {

    constructor () {
      super()
      this.animatedValue = []
      arr.forEach((value) => {
        this.animatedValue[value] = new Animated.Value(0)
      })
    }

    componentDidMount () {
      this.animate()
    }

    animate () {
      const animations = arr.map((item) => {
        return Animated.timing(
          this.animatedValue[item],
          {
            toValue: 1,
            duration: 4000
          }
        )
      })
      Animated.stagger(100, animations).start()
    }

    render () {
      const animations = arr.map((a, i) => {
        return <Animated.View key={i} style={{opacity: this.animatedValue[a], height: 20, width: 20, backgroundColor: 'red', marginLeft: 3, marginTop: 3}} />
      })
      return (
        <View style={styles.container}>
          {animations}
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
  })
AnimatedScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

AnimatedScreen.navigationOptions = {
  header: null
};

export default AnimatedScreen;
