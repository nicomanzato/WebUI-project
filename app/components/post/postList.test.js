import React from 'react';
import PostList from './postList';
import PostMock from './../../store/post/mock/postMock'
import PostMock2 from './../../store/post/mock/postMock2'
import PostMock3 from './../../store/post/mock/postMock3'
import ShallowRenderer from 'react-test-renderer/shallow';

describe('post list', () => {

  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <PostList data={[PostMock, PostMock2, PostMock3]} />
    );

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

});
