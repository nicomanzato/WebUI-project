import React from 'react';
import PostListElement from './postListElement';
import PostMock from './../../store/post/mock/postMock'
import ShallowRenderer from 'react-test-renderer/shallow';

describe('post list element', () => {

  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <PostListElement item={PostMock} onPressItem={() => {}} />
    );

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
