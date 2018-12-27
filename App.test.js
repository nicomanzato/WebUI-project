import React from 'react';
import {App} from './app'
import { Provider } from 'react-redux';
import ShallowRenderer from 'react-test-renderer/shallow';
import {store} from './app/store'

describe('app', () => {

  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

});
