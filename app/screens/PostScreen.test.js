import React from 'react';
import {PostScreen} from './postScreen'
import PostMock from './../store/post/mock/postMock'
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import {store} from './../store'

describe('post screen', () => {
  it('should render correctly while loading post', () => {

    const mockNavigationProp = {state: {params: {data: '1'}}}

    const tree = renderer
      .create(
        <Provider store={store}>
          <PostScreen
            showPost={{}}
            isLoadingShowPost={true}
            navigation={mockNavigationProp}
            requestPostShow={() => {}}
          />
        </Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly when done loading post', () => {

    const mockNavigationProp = {state: {params: {data: '1'}}}

    const tree = renderer
      .create(
        <Provider store={store}>
          <PostScreen
            showPost={PostMock}
            isLoadingShowPost={false}
            navigation={mockNavigationProp}
            requestPostShow={() => {}}
          />
        </Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
