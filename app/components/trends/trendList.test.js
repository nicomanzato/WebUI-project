import React from 'react';
import {TouchableHighlight} from 'react-native'
import TrendList from './trendList'
import TrendMock from './../../store/trend/mock/trendMock'
import { shallow, mount, ReactWrapper } from 'enzyme'

describe('trend list', () => {

  it('should render correctly', () => {
    const wrapper = mount(
      <TrendList
        trends={[TrendMock, TrendMock, TrendMock]}
        onItemPress={() => {}}
      />
    );

    const trend = wrapper.find('TouchableHighlight').first();
    trend.props().onPress();

    wrapper.update();

    expect(wrapper.find('TrendList')).toMatchSnapshot();
  });

});
