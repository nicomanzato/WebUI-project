import React from 'react';
import {SearchScreen} from './SearchScreen'
import ReduxWrappedSearchScreen from './SearchScreen'
import { Provider } from 'react-redux';
import PostMock from './../store/post/mock/postMock'
import TrendMock from './../store/trend/mock/trendMock'
import ShallowRenderer from 'react-test-renderer/shallow';
import {store} from './../store'

describe('search screen', () => {

  it('should render trends correctly', () => {
    const mockNavigationProp = {state: {params: {data: '1'}}};
    const renderer = new ShallowRenderer();
    renderer.render(
      <Provider store={store}>
        <SearchScreen
          navigation={mockNavigationProp}
          loadingTrends={false}
          trends={[TrendMock, TrendMock, TrendMock, TrendMock]}
          requestTrendsLoad={() => {}}

          searchKeyword={''}
          hasSearched={false}
          loadingSearch={false}
          searchResult={{}}
          loadingMoreSearchResults={false}
        />
      </Provider>
    );

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

  it('should render search results correctly', () => {
    const mockNavigationProp = {state: {params: {data: '1'}}};
    const renderer = new ShallowRenderer();
    renderer.render(
      <Provider store={store}>
        <ReduxWrappedSearchScreen
          navigation={mockNavigationProp}
          loadingTrends={false}
          trends={[TrendMock, TrendMock, TrendMock, TrendMock]}

          searchKeyword={'aSearchKeyword'}
          hasSearched={false}
          loadingSearch={false}
          searchResult={[PostMock, PostMock, PostMock, PostMock]}
          loadingMoreSearchResults={false}
        />
      </Provider>
    );

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

});
