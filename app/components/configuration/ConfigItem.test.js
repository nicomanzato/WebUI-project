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

    expect(wrapper).toMatchSnapshot();
  });

  it('should call onChange when pressed', () => {

    const onChange = jest.fn().mockName('mockedFunction');

    const wrapper = mount(
      <ConfigItem
        title='Test title'
        onChange={onChange}
        value={false}
      />
    );

    const configItem = wrapper.find(CheckBox).first();

    configItem.props().onValueChange();

    expect(onChange).toHaveBeenCalled();
  });

});
