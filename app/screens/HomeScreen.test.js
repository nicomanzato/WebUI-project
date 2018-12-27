import React from 'react';
import {HomeScreen} from './HomeScreen'
import ReduxWrappedHomeScreen from './HomeScreen'
import { Provider } from 'react-redux';
import PostMock from './../store/post/mock/postMock'
import ShallowRenderer from 'react-test-renderer/shallow';
import {store} from './../store'

describe('home screen', () => {

  it('should render correctly', () => {
    const mockNavigationProp = {state: {params: {data: '1'}}}
    const renderer = new ShallowRenderer();
    renderer.render(
      <Provider store={store}>
        <HomeScreen
          navigation={mockNavigationProp}
          loading={false}
          loadingMorePost={false}
          loadedPost={[PostMock]}
          requestLoadPost={() => {}}
          requestLoadMorePost={() => {}}
        />
      </Provider>
    );

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

  it('should render correctly when wrapped with redux', () => {
    const mockNavigationProp = {state: {params: {data: '1'}}}
    const renderer = new ShallowRenderer();
    renderer.render(
      <Provider store={store}>
        <ReduxWrappedHomeScreen
          navigation={mockNavigationProp}/>
      </Provider>
    );

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

});
