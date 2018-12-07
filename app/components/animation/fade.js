import React, { Component } from 'react';
import { View, Animated, Text } from 'react-native';

class Fade extends React.Component {

  constructor(props){
    super(props);

    this.visible = this.props.visible;
  }

  componentDidMount = () => {
    this.visibility = new Animated.Value(this.props.visible ? 1 : 0);
  }

  componentDidUpdate = () => {
    this.checkForEnabledVisibility();
    Animated.timing(this.visibility,{
      toValue: this.props.visible ? 1 : 0,
      duration: 300,
    }).start(this.updateVisibility());
  }

  checkForEnabledVisibility = () => {
    if (this.props.visible) { this.visible = true; }
  }

  updateVisibility = () => {
     this.visible = this.props.visible;
  }

  render = () => {

    const { visible, style, children, ...rest } = this.props;

    const containerStyle = {
      opacity: this.visibility,
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
