import React from 'react';
import {SearchScreen} from './SearchScreen'
import { Provider } from 'react-redux';
import PostMock from './../store/post/mock/postMock'
import TrendMock from './../store/trend/mock/trendMock'
import renderer from 'react-test-renderer';
import {store} from './../store'

describe('search screen', () => {
  it('should render trends correctly', () => {
    const mockNavigationProp = {state: {params: {data: '1'}}};
    const tree = renderer
      .create(
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
        </Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render search results correctly', () => {
    const mockNavigationProp = {state: {params: {data: '1'}}};
    const tree = renderer
      .create(
        <Provider store={store}>
          <SearchScreen
            navigation={mockNavigationProp}
            loadingTrends={false}
            trends={[TrendMock, TrendMock, TrendMock, TrendMock]}
            requestTrendsLoad={() => {}}

            searchKeyword={'aSearchKeyword'}
            hasSearched={true}
            loadingSearch={false}
            searchResult={[PostMock, PostMock, PostMock, PostMock]}
            loadingMoreSearchResults={false}
          />
        </Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
