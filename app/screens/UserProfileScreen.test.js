import React from 'react';
import {UserProfileScreen} from './UserProfileScreen'
import ReduxWrappedUserProfileScreen from './UserProfileScreen'

import UserProfileMock from './../store/user/mock/UserProfileMock'
import PostMock from './../store/post/mock/postMock'

import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import {store} from './../store'
import { shallow, mount, ReactWrapper } from 'enzyme';


describe('user profile screen', () => {

  it('should render correctly', () => {
    const mockNavigationProp = {state: {params: {data: '1'}}, getParam: () => { return '1'}}
    const wrapper = shallow(
      <UserProfileScreen
        navigation={mockNavigationProp}
        requestUserProfile={() => {}}
        isLoadingUserProfile={true}
        user={UserProfileMock}
        userProfilePost={{}}
        isLoadingUserProfilePost={false}
      />
     );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render search results correctly', () => {
    const mockNavigationProp = {state: {params: {data: '1'}}, getParam: () => { return '1'}}
    const wrapper = shallow(
      <ReduxWrappedUserProfileScreen
        store={store}
        navigation={mockNavigationProp}
        requestUserProfile={() => {}}
        isLoadingUserProfile={false}
        user={UserProfileMock}
        userProfilePost={[PostMock, PostMock, PostMock]}
        isLoadingUserProfilePost={false}
      />
     );
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle dispatching its actions', () => {
    const requestUserProfile = jest.fn().mockName('mockedFunction');
    const mockNavigationProp = {state: {params: {data: '1'}}, getParam: () => { return '1'}}
    const wrapper = mount(
      <UserProfileScreen
        navigation={mockNavigationProp}
        requestUserProfile={requestUserProfile}
        isLoadingUserProfile={false}
        user={UserProfileMock}
        userProfilePost={[PostMock, PostMock, PostMock]}
        isLoadingUserProfilePost={false}
      />
     );
    expect(requestUserProfile).toHaveBeenCalled();
  });

});
