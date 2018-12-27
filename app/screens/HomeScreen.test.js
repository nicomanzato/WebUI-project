import React from 'react';
import {HomeScreen} from './HomeScreen'
import ReduxWrappedHomeScreen from './HomeScreen'
import { Provider } from 'react-redux';
import PostMock from './../store/post/mock/postMock'
import renderer from 'react-test-renderer';
import {store} from './../store'

describe('home screen', () => {
  it('should render correctly', () => {
    const mockNavigationProp = {state: {params: {data: '1'}}}
    const tree = renderer
      .create(
        <Provider store={store}>
          <HomeScreen
            navigation={mockNavigationProp}
            loading={false}
            loadingMorePost={false}
            loadedPost={[PostMock]}
            requestLoadPost={() => {}}
            requestLoadMorePost={() => {}}
          />
        </Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly when wrapped with redux', () => {
    const mockNavigationProp = {state: {params: {data: '1'}}}
    const tree = renderer
      .create(
        <Provider store={store}>
          <ReduxWrappedHomeScreen
            navigation={mockNavigationProp}/>
        </Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
