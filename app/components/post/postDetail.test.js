import React from 'react';
import PostDetail from './postDetail';
import PostMock2 from './../../store/post/mock/postMock2'
import ShallowRenderer from 'react-test-renderer/shallow';

describe('post detail', () => {

  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <PostDetail item={PostMock2} />
    );

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

});
