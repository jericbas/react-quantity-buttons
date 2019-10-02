/* eslint css-modules/no-unused-class: [2, { markAsUsed: ['secondary', 'danger'] }] */

import * as React from 'react';
import { shallow, mount } from 'enzyme';

import QuantityButton from './QuantityButton';
import styles from './QuantityButton.css';

describe('<QuantityButton>', () => {
  it('should render the default markup', () => {
    const wrapper = shallow(<QuantityButton />);

    expect(wrapper).toHaveDisplayName('button');
    expect(wrapper).toHaveText('test');
  });

  it('should render the default classes', () => {
    const wrapper = shallow(<QuantityButton />);

    expect(wrapper).toHaveClassName(styles.root);
    expect(wrapper).toHaveClassName(styles.primary);
  });

  // Which is equivalent to:

  it('should render the default markup and classes [snapshot]', () => {
    const wrapper = shallow(<QuantityButton />);

    expect(wrapper).toMatchSnapshot();
  });

  // Event handlers.

  it('should trigger click event handlers', () => {
    const spy = jest.fn();
    const wrapper = mount(<QuantityButton onClick={spy} />);

    wrapper.simulate('click');

    expect(spy).toHaveBeenCalled();
  });
});
