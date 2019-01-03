import React from 'react';
import {SearchScreen} from './SearchScreen'
import ReduxWrappedSearchScreen from './SearchScreen'
import { Provider } from 'react-redux';
import PostMock from './../store/post/mock/postMock'
import TrendMock from './../store/trend/mock/trendMock'
import {Trend} from './../components/trends/trend'
import { shallow, mount, ReactWrapper } from 'enzyme';
import {store} from './../store'
import {TouchableHighlight} from 'react-native';

describe('search screen', () => {

  it('should render trends correctly', () => {
    const mockNavigationProp = {state: {params: {data: '1'}}}
    const wrapper = shallow(
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
     );

     expect(wrapper).toMatchSnapshot();
  });

  it('should render activity indicator correctly', () => {
    const mockNavigationProp = {state: {params: {data: '1'}}}
    const wrapper = shallow(
      <SearchScreen
        navigation={mockNavigationProp}
        loadingTrends={true}
        trends={{}}
        requestTrendsLoad={() => {}}

        searchKeyword={''}
        hasSearched={false}
        loadingSearch={false}
        searchResult={{}}
        loadingMoreSearchResults={false}
      />
     );

     expect(wrapper).toMatchSnapshot();
  });

  it('should render trends correctly when wrapped with redux', () => {
    const mockNavigationProp = {state: {params: {data: '1'}}}
    const wrapper = shallow(
      <ReduxWrappedSearchScreen
        store={store}
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
     );
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle dispatching its actions', () => {

    const requestTrendsLoad = jest.fn().mockName('mockedFunction');
    const requestSearchForPost = jest.fn().mockName('mockedFunction');
    const requestSearchMorePost = jest.fn().mockName('mockedFunction');
    const resetPostSearch = jest.fn().mockName('mockedFunction');
    const resetTrends = jest.fn().mockName('mockedFunction');

    const mockNavigationProp = {state: {params: {data: '1'}}}
    const wrapper = mount(
      <SearchScreen
        navigation={mockNavigationProp}
        requestTrendsLoad={requestTrendsLoad}
        requestSearchForPost={requestSearchForPost}
        requestSearchMorePost={requestSearchMorePost}
        resetPostSearch={resetPostSearch}
        resetTrends={resetTrends}
        loadingTrends={false}
        trends={[TrendMock, TrendMock, TrendMock, TrendMock]}
        requestTrendsLoad={() => {}}

        searchKeyword={''}
        hasSearched={false}
        loadingSearch={false}
        searchResult={{}}
        loadingMoreSearchResults={false}
      />
     );

     const searchForm = wrapper.find('SearchForm').first();

     searchForm.props().onSubmit();
     expect(requestSearchForPost).toHaveBeenCalled();

     searchForm.props().onReset();
     expect(resetTrends).toHaveBeenCalled();
     expect(resetPostSearch).toHaveBeenCalled();
     expect(requestSearchForPost).toHaveBeenCalled();

     wrapper.update();

     const trend = wrapper.find('Trend').first().find('TouchableHighlight').first();
     trend.props().onPress();
  });

});
