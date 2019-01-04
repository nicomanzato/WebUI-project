import React from 'react';
import ConfigList from './configList';
import { shallow, mount, ReactWrapper } from 'enzyme';


describe('config list', () => {

  it('should render correctly', () => {
    const wrapper = shallow(
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
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should dispatch an action when configItem is pressed', () => {

    const mockConfigToggleVerifiedOnly = jest.fn().mockName('mockedFunction');
    const mockConfigToggleDoNotFollow = jest.fn().mockName('mockedFunction');
    const mockConfigToggleHaveDefaultInformation = jest.fn().mockName('mockedFunction');
    const mockConfigToggleContainsLink = jest.fn().mockName('mockedFunction');
    const mockConfigToggleTextTruncated = jest.fn().mockName('mockedFunction');

    const wrapper = mount(
      <ConfigList
        configVerifiedOnly={false}
        configDoNotFollow={false}
        configHaveDefaultInformation={false}
        configContainsLink={false}
        configTextTruncated={false}

        configToggleVerifiedOnly={mockConfigToggleVerifiedOnly}
        configToggleDoNotFollow={mockConfigToggleDoNotFollow}
        configToggleHaveDefaultInformation={mockConfigToggleHaveDefaultInformation}
        configToggleContainsLink={mockConfigToggleContainsLink}
        configToggleTextTruncated={mockConfigToggleTextTruncated}
      />
    );

    const configItems = wrapper.find('ConfigItem');

    configItems.forEach((configItem) => {
      configItem.props().onChange();
    });

    expect(mockConfigToggleVerifiedOnly).toHaveBeenCalled();
    expect(mockConfigToggleDoNotFollow).toHaveBeenCalled();
    expect(mockConfigToggleHaveDefaultInformation).toHaveBeenCalled();
    expect(mockConfigToggleContainsLink).toHaveBeenCalled();
    expect(mockConfigToggleTextTruncated).toHaveBeenCalled();

  });
});
