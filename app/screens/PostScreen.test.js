import React from 'react';
import {PostScreen} from './postScreen'
import ReduxWrappedPostScreen from './postScreen'
import PostMock from './../store/post/mock/postMock'
import { Provider } from 'react-redux';
import { shallow, mount, ReactWrapper } from 'enzyme';
import {store} from './../store'

describe('post screen', () => {

  it('should render correctly while loading post', () => {
    const mockNavigationProp = {state: {params: {data: '1'}}}
    const wrapper = shallow(
      <PostScreen
        showPost={{}}
        isLoadingShowPost={true}
        navigation={mockNavigationProp}
        requestPostShow={() => {}}
      />
     );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when wrapped with redux', () => {
    const mockNavigationProp = {state: {params: {data: '1'}}}
    const wrapper = shallow(
      <ReduxWrappedPostScreen
        store={store}
        showPost={PostMock}
        isLoadingShowPost={false}
        navigation={mockNavigationProp}
      />
     );
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle dispatching its actions', () => {
    const requestPostShow = jest.fn().mockName('mockedFunction');
    const mockNavigationProp = {state: {params: {data: '1'}}}
    const wrapper = mount(
      <PostScreen
        showPost={PostMock}
        isLoadingShowPost={false}
        navigation={mockNavigationProp}
        requestPostShow={requestPostShow}
      />
     );

    expect(requestPostShow).toHaveBeenCalled();
  });

});
