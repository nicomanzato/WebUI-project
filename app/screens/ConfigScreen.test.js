import React from 'react';
import {ConfigScreen} from './ConfigScreen'
import ReduxWrappedConfigScreen from './ConfigScreen'
import { Provider } from 'react-redux';
import ShallowRenderer from 'react-test-renderer/shallow';
import {store} from './../store'

describe('config screen', () => {

  it('should render correctly', () => {
    const mockNavigationProp = {state: {params: {data: '1'}}}
    const renderer = new ShallowRenderer();
    renderer.render(
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
      </Provider>
    );

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

  it('should render correctly when wrapped with redux', () => {
    const mockNavigationProp = {state: {params: {data: '1'}}}
    const renderer = new ShallowRenderer();
    renderer.render(
      <Provider store={store}>
        <ReduxWrappedConfigScreen
          navigation={mockNavigationProp}
        />
      </Provider>
    );

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

});
