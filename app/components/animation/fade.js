import React, { Component } from 'react';
import { View, Animated, Text } from 'react-native';

class Fade extends React.Component {

  constructor(props){
    super(props);

    this.shouldRenderChildren = true;
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
      useNativeDriver: false,
      toValue: this.props.visible ? 1 : 0,
      duration: 500,
    }).start(this.onDoneFading);
  }

  onDoneFading = () => {
    if (this.props.visible === false) {
      if (this.props.onDoneFadingOut) this.props.onDoneFadingOut();
      this.shouldRenderChildren = false;
    }
  }

  render = () => {

    const { visible, style, children, ...rest } = this.props;
    const containerStyle = {
      opacity: this.visibility,
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
        {children}
      </Animated.View>
    );
  }

}

export default Fade
