import React from 'react';
import Post from './post';
import PostMock from './../../store/post/mock/postMock'
import renderer from 'react-test-renderer';

describe('post component', () => {
it('should render correctly', () => {
  const tree = renderer
    .create(<Post item={PostMock} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
});
