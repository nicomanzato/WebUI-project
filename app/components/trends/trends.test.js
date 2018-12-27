import React from 'react';
import Trends from './trends';
import TrendMock from './../../store/trend/mock/trendMock'
import ShallowRenderer from 'react-test-renderer/shallow';

describe('trends', () => {

  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Trends
        trends={[TrendMock, TrendMock, TrendMock]}
        onTrendsPress={() => {}}
      />
    );

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

});
