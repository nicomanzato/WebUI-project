import React from 'react';
import {TouchableHighlight} from 'react-native'
import TrendList from './trendList'
import TrendMock from './../../store/trend/mock/trendMock'
import { shallow, mount, ReactWrapper } from 'enzyme'

describe('trend list', () => {

  it('should handle dispatching its actions', () => {
    const onItemPress = jest.fn().mockName('mockedFunction');

    const wrapper = mount(
      <TrendList
        trends={[TrendMock, TrendMock, TrendMock]}
        onItemPress={onItemPress}
      />
    );

    const trend = wrapper.find('Trend').first().find('TouchableHighlight').first();
    trend.props().onPress();

    expect(onItemPress).toHaveBeenCalled();
  });

  it('should render correctly', () => {
    const wrapper = shallow(
      <TrendList
        trends={[TrendMock, TrendMock, TrendMock]}
        onItemPress={() => {}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

});
