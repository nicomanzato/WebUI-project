import React from 'react';
import Post from './post';
import PostMock2 from './../../store/post/mock/postMock2'
import ShallowRenderer from 'react-test-renderer/shallow';

describe('post component', () => {

  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Post item={PostMock2} />
    );

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

});
