import React from 'react';
import ConfigItem from './configItem';
import renderer from 'react-test-renderer';

describe('config item', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <ConfigItem
          title='Test title'
          onChange={() => {}}
          value={false}
        />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
