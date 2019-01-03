import React from 'react';
import {App} from './app'
import { Provider } from 'react-redux';
import { shallow, mount, ReactWrapper } from 'enzyme';
import {store} from './app/store'

describe('app', () => {

  it('should render correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

});
