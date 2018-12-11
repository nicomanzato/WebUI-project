import React, { Component } from 'react';
import { View, Animated, Text } from 'react-native';

class Fade extends React.Component {

  constructor(props){
    super(props);

    this.shouldRenderChildren = this.props.visible;
    this.visibility = new Animated.Value(0);
  }

  componentDidMount = () => {
    if (this.props.visible) this.fade();
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.visible != this.props.visible) this.fade();
  }

  fade = () => {
    this.shouldRenderChildren = true;
    Animated.timing(this.visibility, {
      useNativeDriver: true,
      toValue: this.props.visible ? 1 : 0,
      duration: 500,
    }).start(this.onDoneFading);
  }

  onDoneFading = () => {

    // if done fading out
    if (!this.props.visible) {
      this.shouldRenderChildren = false;
      if (this.props.onDoneFadingOut) this.props.onDoneFadingOut();
    }
  }

  render = () => {

    const { visible, style, children, ...rest } = this.props;
    const containerStyle = {
      opacity: this.visibility.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
      transform: [
        {
          scale: this.visibility.interpolate({
            inputRange: [0, 1],
            outputRange: [1.1, 1],
          }),
        },
      ],
    };
    const combinedStyle = [containerStyle, style];

    return (
      <Animated.View style={combinedStyle} {...rest}>
        {this.shouldRenderChildren ? children : null}
      </Animated.View>
    );
  }

}

export default Fade
