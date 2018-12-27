import React from 'react';
import Timeline from './timeline';
import PostMock from './../../store/post/mock/postMock'
import PostMock2 from './../../store/post/mock/postMock2'
import PostMock3 from './../../store/post/mock/postMock3'
import renderer from 'react-test-renderer';

describe('post screen', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Timeline
          data={[PostMock, PostMock2, PostMock3]}
          onComponentMount={() => {}}
        />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
