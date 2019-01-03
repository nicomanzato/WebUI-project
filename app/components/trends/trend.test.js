import React from 'react';
import Trend from './trend'
import TrendMock from './../../store/trend/mock/trendMock'
import { shallow, mount, ReactWrapper } from 'enzyme'

describe('trend', () => {

  it('should render correctly', () => {
    const wrapper = shallow(
      <Trend
        onPress={() => {}}
        trend={TrendMock}
        key={4}
        index={4}
      />
    );
    
    expect(wrapper).toMatchSnapshot();
  });

});
