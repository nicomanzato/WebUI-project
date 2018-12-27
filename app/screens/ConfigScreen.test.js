import React from 'react';
import {ConfigScreen} from './ConfigScreen'
import ReduxWrappedConfigScreen from './ConfigScreen'
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import {store} from './../store'

describe('config screen', () => {
  it('should render correctly', () => {
    const mockNavigationProp = {state: {params: {data: '1'}}}
    const tree = renderer
      .create(
        <Provider store={store}>
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
        </Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly when wrapped with redux', () => {
    const mockNavigationProp = {state: {params: {data: '1'}}}
    const tree = renderer
      .create(
        <Provider store={store}>
          <ReduxWrappedConfigScreen
            navigation={mockNavigationProp}
          />
        </Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
