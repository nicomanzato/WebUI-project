import React from 'react';
import UserProfile from './userProfile';
import UserProfileMock from './../../store/user/mock/userProfileMock'
import ShallowRenderer from 'react-test-renderer/shallow';

describe('user profile', () => {

  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <UserProfile
        user={UserProfileMock}
      />
    );

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
