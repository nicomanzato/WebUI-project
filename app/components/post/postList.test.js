import React from 'react';
import PostList from './postList';
import PostMock from './../../store/post/mock/postMock'
import PostMock2 from './../../store/post/mock/postMock2'
import PostMock3 from './../../store/post/mock/postMock3'
import { shallow, mount, ReactWrapper } from 'enzyme';

describe('post list', () => {

  it('should render correctly', () => {
    const wrapper = shallow(
      <PostList data={[PostMock, PostMock2, PostMock3]} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should call onProfilePicPress when pressed', () => {

    const navigate = jest.fn().mockName('mockedFunction');
    const dispatch = jest.fn().mockName('mockedFunction');
    const navigationMock = {navigate: navigate, dispatch: dispatch}

    const wrapper = mount(
      <PostList
        navigation={navigationMock}
        data={[PostMock, PostMock2, PostMock3]}
      />
    );

    const postListElement = wrapper.find('PostListElement').first();
    postListElement.props().onProfilePicPress('112233');
    postListElement.props().onPressItem('112233');

    expect(dispatch).toHaveBeenCalled();
    expect(navigate).toHaveBeenCalled();
  });

});
