import React from 'react';
import SearchForm from './searchForm';
import ShallowRenderer from 'react-test-renderer/shallow';

import { mount, ReactWrapper } from 'enzyme';

// React Navigation generates random React keys, which makes
// snapshot testing fail. Mock the randomness to keep from failing.
jest.mock('react-navigation/src/routers/KeyGenerator', () => ({
  generateKey: jest.fn(() => 123),
}));

describe('search form', () => {

  it('should render correctly', () => {
    const wrapper = mount(
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

    expect(wrapper.find(SearchForm)).toMatchSnapshot();
  });

});
