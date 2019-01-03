import React from 'react';
import PostList from './postList';
import PostMock from './../../store/post/mock/postMock'
import PostMock2 from './../../store/post/mock/postMock2'
import PostMock3 from './../../store/post/mock/postMock3'
import { shallow, mount, ReactWrapper } from 'enzyme';

describe('post list', () => {

  it('should render correctly', () => {
    const wrapper = shallow(
      <PostList data={[PostMock, PostMock2, PostMock3]} />
    );

    expect(wrapper).toMatchSnapshot();
  });

});
