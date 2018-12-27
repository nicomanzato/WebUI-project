import React from 'react';
import TrendList from './trendList';
import TrendMock from './../../store/trend/mock/trendMock'
import renderer from 'react-test-renderer';

describe('trend list', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <TrendList
          trends={[TrendMock, TrendMock, TrendMock]}
          onItemPress={() => {}}
        />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
