import React from 'react';
import {App} from './app'
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import {store} from './app/store'

describe('app', () => {
  it('should render correctly', () => {
    const mockNavigationProp = {state: {params: {data: '1'}}}
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
