import React from 'react';
import PostListElement from './postListElement';
import PostMock from './../../store/post/mock/postMock'
import renderer from 'react-test-renderer';

describe('post list element', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<PostListElement item={PostMock} onPressItem={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
