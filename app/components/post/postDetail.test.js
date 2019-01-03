import React from 'react';
import PostDetail from './postDetail';
import PostMock from './../../store/post/mock/postMock'
import PostMock2 from './../../store/post/mock/postMock2'
import { shallow, mount, ReactWrapper } from 'enzyme';

describe('post detail', () => {

  it('should render post with image correctly', () => {
    const wrapper = shallow(
      <PostDetail item={PostMock2} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render post with no image correctly', () => {
    const wrapper = shallow(
      <PostDetail item={PostMock} />
    );

    expect(wrapper).toMatchSnapshot();
  });

});
