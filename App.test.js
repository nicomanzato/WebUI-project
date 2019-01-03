import React from 'react';
import {App} from './app'
import { shallow, mount, ReactWrapper } from 'enzyme';
import {store} from './app/store'

describe('app', () => {

  it('should render correctly', () => {
    const wrapper = shallow(
      <App />
    );

    expect(wrapper).toMatchSnapshot();
  });

});
