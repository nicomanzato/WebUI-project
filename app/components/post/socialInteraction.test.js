import React from 'react';
import SocialInteraction from './socialInteraction';
import { shallow, mount, ReactWrapper } from 'enzyme';

describe('social interaction', () => {

  it('should render correctly', () => {
    const wrapper = shallow(
      <SocialInteraction favoriteCount={10} retweetCount={15} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
