import React from 'react';
import ConfigItem from './configItem'
import {CheckBox} from 'react-native'

import { shallow, mount, ReactWrapper } from 'enzyme';

describe('config item', () => {

  it('should render correctly', () => {
    const wrapper = shallow(
      <ConfigItem
        title='Test title'
        onChange={() => {}}
        value={false}
      />
    );

    expect(wrapper.find(ConfigItem)).toMatchSnapshot();
  });

  it('should call onChange when pressed', () => {

    const mockFn = jest.fn().mockName('mockedFunction');

    const wrapper = mount(
      <ConfigItem
        title='Test title'
        onChange={mockFn}
        value={false}
      />
    );

    const configItem = wrapper
      .find(CheckBox)
      .first();

    configItem.props().onValueChange();

    expect(mockFn).toHaveBeenCalled();
  });

});
