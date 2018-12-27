import React from 'react';
import SearchForm from './searchForm';
import renderer from 'react-test-renderer';

describe('search form', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <SearchForm
          animated
          hasSearched={() => {}}
          onTrendInputTextChange={() => {}}
          searchValue={'This is a Test value'}
          onReset={() => {}}
          onSubmit={() => {}}
        />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
