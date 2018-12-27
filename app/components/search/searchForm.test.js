import React from 'react';
import SearchForm from './searchForm';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('search form', () => {

  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <SearchForm
        animated
        hasSearched={() => {}}
        onTrendInputTextChange={() => {}}
        searchValue={'This is a Test value'}
        onReset={() => {}}
        onSubmit={() => {}}
      />
    );
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
  
});
