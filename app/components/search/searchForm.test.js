import React from 'react';
import SearchForm from './searchForm';
import ShallowRenderer from 'react-test-renderer/shallow';

import { mount, ReactWrapper, shallow } from 'enzyme';

describe('search form', () => {

  it('should render correctly', () => {
    const wrapper = shallow(
      <SearchForm
        animated
        hasSearched={true}
        onTrendInputTextChange={() => {}}
        searchValue={'This is a Test value'}
        onReset={() => {}}
        onSubmit={() => {}}
        onSearchInputTextChange={() => {}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle dispatching its actions', () => {

    const onReset = jest.fn().mockName('mockedFunction');
    const onSubmit = jest.fn().mockName('mockedFunction');

    const wrapper = mount(
      <SearchForm
        animated
        hasSearched={true}
        onTrendInputTextChange={() => {}}
        searchValue={'This is a Test value'}
        onReset={onReset}
        onSubmit={onSubmit}
        onSearchInputTextChange={() => {}}
      />
    );

    const searchTextInput = wrapper
      .find('TextInput')
      .first();

    const searchButton = wrapper
      .find('TouchableHighlight')
      .first();

    const resetButton = wrapper
      .find({name: 'ios-close'})
      .first();

    searchTextInput.props().onChangeText('aSearchKeyword');
    searchButton.props().onPress();
    resetButton.props().onPress();

    expect(onReset).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalled();
  });

});
