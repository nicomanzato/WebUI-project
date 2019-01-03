import React from 'react';
import Timeline from './timeline';
import PostMock from './../../store/post/mock/postMock'
import PostMock2 from './../../store/post/mock/postMock2'
import PostMock3 from './../../store/post/mock/postMock3'
import { shallow, mount, ReactWrapper } from 'enzyme';

describe('post screen', () => {

  it('should render correctly when done loading', () => {
    const wrapper = shallow(
      <Timeline
        data={[PostMock, PostMock2, PostMock3]}
        loading={false}
        onComponentMount={() => {}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when loading', () => {
    const wrapper = shallow(
      <Timeline
        data={[]}
        loading={true}
        onComponentMount={() => {}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

});
