import React from 'react';
import {UserProfileScreen} from './UserProfileScreen'

import UserProfileMock from './../store/user/mock/UserProfileMock'
import PostMock from './../store/post/mock/postMock'

import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import {store} from './../store'

describe('user profile screen', () => {
  it('should render correctly', () => {
    const mockNavigationProp = {state: {params: {userId: '1'}}};
    mockNavigationProp.getParam = () => {'anID'}
    const tree = renderer
      .create(
        <Provider store={store}>
          <UserProfileScreen
            navigation={mockNavigationProp}
            requestUserProfile={() => {}}
            isLoadingUserProfile={false}
            user={UserProfileMock}
            userProfilePost={[PostMock, PostMock, PostMock]}
            isLoadingUserProfilePost={false}
          />
        </Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
