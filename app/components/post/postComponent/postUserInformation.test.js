import React from 'react'
import {PostUserInformation} from './postUserInformation'
import PostMock from './../../../store/post/mock/postMock'
import { shallow, mount, ReactWrapper } from 'enzyme'

describe('post component', () => {

  it('should render correctly', () => {
    const wrapper = shallow(
      <PostUserInformation user={PostMock.user} />
    );

    expect(wrapper).toMatchSnapshot();
  });

});
