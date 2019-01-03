import React from 'react'
import {PostContent} from './postContent'
import PostMock from './../../../store/post/mock/postMock'
import { shallow, mount, ReactWrapper } from 'enzyme'

describe('post component', () => {

  it('should render correctly', () => {
    const wrapper = shallow(
      <PostContent post={PostMock} />
    );

    expect(wrapper).toMatchSnapshot();
  });

});
