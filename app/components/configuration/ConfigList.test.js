import React from 'react';
import ConfigList from './configList';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('post screen', () => {
  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <ConfigList
          configVerifiedOnly={false}
          configDoNotFollow={false}
          configHaveDefaultInformation={false}
          configContainsLink={false}
          configTextTruncated={false}

          configToggleVerifiedOnly={() => {}}
          configToggleDoNotFollow={() => {}}
          configToggleHaveDefaultInformation={() => {}}
          configToggleContainsLink={() => {}}
          configToggleTextTruncated={() => {}}
          />);

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
