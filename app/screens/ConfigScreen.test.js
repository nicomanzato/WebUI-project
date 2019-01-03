import React from 'react';
import {ConfigScreen} from './ConfigScreen'
import ReduxWrappedConfigScreen from './ConfigScreen'
import { Provider } from 'react-redux';
import {store} from './../store'
import { shallow, mount, ReactWrapper } from 'enzyme';
import ConfigItem from './../components/configuration/configItem'

describe('config screen', () => {

  it('should render correctly', () => {
    const mockNavigationProp = {state: {params: {data: '1'}}}
    const wrapper = shallow(
      <ConfigScreen
        navigation={mockNavigationProp}
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

  it('should render correctly', () => {
    const mockNavigationProp = {state: {params: {data: '1'}}}
    const wrapper = shallow(
      <ReduxWrappedConfigScreen
        navigation={mockNavigationProp}
        store={store}
      />
     );
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle dispatching its actions', () => {
    const mockNavigationProp = {state: {params: {data: '1'}}}
    const configToggleVerifiedOnly = jest.fn().mockName('mockedFunction');
    const configToggleDoNotFollow = jest.fn().mockName('mockedFunction');
    const configToggleHaveDefaultInformation = jest.fn().mockName('mockedFunction');
    const configToggleContainsLink = jest.fn().mockName('mockedFunction');
    const configToggleTextTruncated = jest.fn().mockName('mockedFunction');
    const wrapper = mount(
      <ConfigScreen
        navigation={mockNavigationProp}
        configVerifiedOnly={false}
        configDoNotFollow={false}
        configHaveDefaultInformation={false}
        configContainsLink={false}
        configTextTruncated={false}

        configToggleVerifiedOnly={configToggleVerifiedOnly}
        configToggleDoNotFollow={configToggleDoNotFollow}
        configToggleHaveDefaultInformation={configToggleHaveDefaultInformation}
        configToggleContainsLink={configToggleContainsLink}
        configToggleTextTruncated={configToggleTextTruncated}
      />
     );

     const configItems = wrapper.find('ConfigItem');
     configItems.forEach((element) => {
       element.props().onChange();
     });

     expect(configToggleVerifiedOnly).toHaveBeenCalled();
     expect(configToggleDoNotFollow).toHaveBeenCalled();
     expect(configToggleHaveDefaultInformation).toHaveBeenCalled();
     expect(configToggleContainsLink).toHaveBeenCalled();
     expect(configToggleTextTruncated).toHaveBeenCalled();
  });

  it('should call redux wrapped dispatch actions', () => {
    const mockNavigationProp = {state: {params: {data: '1'}}}
    const wrapper = mount(
      <ReduxWrappedConfigScreen
        navigation={mockNavigationProp}
        store={store}
      />
     );

     const configItems = wrapper.find('ConfigItem');
     configItems.forEach((element) => {
       element.props().onChange();
     });

     wrapper.update();

     expect(wrapper).toMatchSnapshot();

  });

});
