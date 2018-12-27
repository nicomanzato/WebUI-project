import React from 'react';
import ConfigList from './configList';
import renderer from 'react-test-renderer';

describe('post screen', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
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
          />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
