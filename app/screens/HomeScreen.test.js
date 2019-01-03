import React from 'react';
import {HomeScreen} from './HomeScreen'
import ReduxWrappedHomeScreen from './HomeScreen'
import { Provider } from 'react-redux'
import PostMock from './../store/post/mock/postMock'
import Timeline from './../components/timeline/timeline'
import { shallow, mount, ReactWrapper } from 'enzyme'
import {store} from './../store'

describe('home screen', () => {

  it('should render correctly', () => {
    const mockNavigationProp = {state: {params: {data: '1'}}}
    const wrapper = shallow(
      <HomeScreen
        navigation={mockNavigationProp}
        loading={false}
        loadingMorePost={false}
        loadedPost={[PostMock]}
        requestLoadPost={() => {}}
        requestLoadMorePost={() => {}}
      />
     );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when wrapped with redux', () => {
    const mockNavigationProp = {state: {params: {data: '1'}}}
    const wrapper = shallow(
    <ReduxWrappedHomeScreen
      store={store}
      navigation={mockNavigationProp}
    />
     );
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle dispatching its actions', () => {
    const mockNavigationProp = {state: {params: {data: '1'}}}
    const requestLoadPost = jest.fn().mockName('mockedFunction');
    const requestLoadMorePost = jest.fn().mockName('mockedFunction');
    const wrapper = mount(
      <HomeScreen
        navigation={mockNavigationProp}
        loading={false}
        loadingMorePost={false}
        loadedPost={[PostMock]}
        requestLoadPost={requestLoadPost}
        requestLoadMorePost={requestLoadMorePost}
      />
    );

    const timeline = wrapper.find(Timeline).first();

    expect(requestLoadPost).toHaveBeenCalled();

    timeline.props().onEndReached();
    expect(requestLoadMorePost).toHaveBeenCalled();
  });

});
