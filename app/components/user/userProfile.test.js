import React from 'react';
import UserProfile from './userProfile';
import UserProfileMock from './../../store/user/mock/userProfileMock'
import { shallow, mount, ReactWrapper } from 'enzyme';

describe('user profile', () => {

  it('should render correctly', () => {
    const wrapper = shallow(
      <UserProfile
        user={UserProfileMock}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

});
