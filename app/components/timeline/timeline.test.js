import React from 'react';
import Timeline from './timeline';
import PostMock from './../../store/post/mock/postMock'
import PostMock2 from './../../store/post/mock/postMock2'
import PostMock3 from './../../store/post/mock/postMock3'
import ShallowRenderer from 'react-test-renderer/shallow';

describe('post screen', () => {

  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Timeline
        data={[PostMock, PostMock2, PostMock3]}
        onComponentMount={() => {}}
      />
    );

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

});
