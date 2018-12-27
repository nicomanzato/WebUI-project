import React from 'react';
import ConfigItem from './configItem';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('config item', () => {

  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <ConfigItem
        title='Test title'
        onChange={() => {}}
        value={false}
      />
    );

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

});
