import React from 'react';
import {PostScreen} from './postScreen'
import ReduxWrappedPostScreen from './postScreen'
import PostMock from './../store/post/mock/postMock'
import { Provider } from 'react-redux';
import ShallowRenderer from 'react-test-renderer/shallow';
import {store} from './../store'

describe('post screen', () => {

  it('should render correctly while loading post', () => {
    const mockNavigationProp = {state: {params: {data: '1'}}}
    const renderer = new ShallowRenderer();
    renderer.render(
      <Provider store={store}>
        <PostScreen
          showPost={{}}
          isLoadingShowPost={true}
          navigation={mockNavigationProp}
          requestPostShow={() => {}}
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
        <ReduxWrappedPostScreen
          showPost={PostMock}
          isLoadingShowPost={false}
          navigation={mockNavigationProp}
          requestPostShow={() => {}}
        />
      </Provider>
    );

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

});
