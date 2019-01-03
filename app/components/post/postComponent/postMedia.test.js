import React from 'react'
import {PostMedia} from './postMedia'
import PostMock2 from './../../../store/post/mock/postMock2'
import { shallow, mount, ReactWrapper } from 'enzyme'

describe('post component', () => {

  it('should render correctly', () => {
    const wrapper = shallow(
      <PostMedia post={PostMock2} />
    );

    expect(wrapper).toMatchSnapshot();
  });

});
