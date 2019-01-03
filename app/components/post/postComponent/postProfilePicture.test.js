import React from 'react'
import {PostProfilePicture} from './postProfilePicture'
import PostMock2 from './../../../store/post/mock/postMock2'
import { shallow, mount, ReactWrapper } from 'enzyme'

describe('post component', () => {

  it('should render correctly', () => {
    const wrapper = shallow(
      <PostProfilePicture user={PostMock2.user} />
    );

    expect(wrapper).toMatchSnapshot();
  });

});
