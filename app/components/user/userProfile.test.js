import React from 'react';
import UserProfile from './userProfile';
import UserProfileMock from './../../store/user/mock/userProfileMock'
import renderer from 'react-test-renderer';

describe('user profile', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <UserProfile
          user={UserProfileMock}
        />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
