import React from 'react';
import TrendList from './trendList';
import TrendMock from './../../store/trend/mock/trendMock'
import ShallowRenderer from 'react-test-renderer/shallow';

describe('trend list', () => {

  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <TrendList
        trends={[TrendMock, TrendMock, TrendMock]}
        onItemPress={() => {}}
      />
    );

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

});
