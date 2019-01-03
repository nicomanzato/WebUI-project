import React from 'react';
import PostListElement from './postListElement';
import PostMock from './../../store/post/mock/postMock'
import { shallow, mount, ReactWrapper } from 'enzyme';

describe('post list element', () => {

  it('should render correctly', () => {
    const wrapper = shallow(
      <PostListElement item={PostMock} onPressItem={() => {}} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should call onPressItem when pressed', () => {
    const onPressItem = jest.fn().mockName('mockedFunction');

    const wrapper = mount(
      <PostListElement item={PostMock} onPressItem={onPressItem} />
    );

    const element = wrapper.find('TouchableHighlight').first();
    element.props().onPress();

    expect(onPressItem).toHaveBeenCalled();
  });

});
