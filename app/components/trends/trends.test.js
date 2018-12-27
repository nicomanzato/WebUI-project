import React from 'react';
import Trends from './trends';
import TrendMock from './../../store/trend/mock/trendMock'
import renderer from 'react-test-renderer';

describe('trends', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Trends
          trends={[TrendMock, TrendMock, TrendMock]}
          onTrendsPress={() => {}}
        />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
