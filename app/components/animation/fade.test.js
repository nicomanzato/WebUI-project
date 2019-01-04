import React from 'react'
import Fade from './fade'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';
import { shallow, mount, ReactWrapper } from 'enzyme'

describe('fade animation', () => {

  it('should render correctly', () => {
    const wrapper = shallow(
      <Fade visible={true}>
        <Text> This is a test </Text>
      </Fade>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly', () => {

    const wrapper = shallow(
      <Fade visible={false}>
        <Text> This is a test </Text>
      </Fade>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
