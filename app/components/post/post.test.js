import React from 'react'
import Post from './post'
import PostMock2 from './../../store/post/mock/postMock2'
import { shallow, mount, ReactWrapper } from 'enzyme'

describe('post component', () => {

  it('should render correctly', () => {
    const wrapper = shallow(
      <Post item={PostMock2} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should call onProfilePicPress when pressed', () => {

    const mockFn = jest.fn().mockName('mockedFunction');

    const wrapper = mount(
      <Post
        item={PostMock2}
        onProfilePicPress={() => mockFn()}
      />
    );

    const post = wrapper.find('TouchableHighlight').first();
    post.props().onPress();

    expect(mockFn).toHaveBeenCalled();
  });

});
