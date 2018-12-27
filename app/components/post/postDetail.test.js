import React from 'react';
import PostDetail from './postDetail';
import PostMock from './../../store/post/mock/postMock'
import renderer from 'react-test-renderer';

describe('post detail', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<PostDetail item={PostMock} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
