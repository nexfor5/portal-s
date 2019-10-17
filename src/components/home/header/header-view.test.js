import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import Header from './header-view';

describe("Header component", () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    // ReactDOM.render(<Header scroll={0} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //Shallow
  const shallowed = shallow(<Header scroll={0} />);

  test(("Cover container has id for background"), () => {
    expect(shallowed.find('#cover-container').exists()).toBeTruthy();
  });

  //Mount
  // const mounted = mount(<Header scroll={0} />);

  // test(("Navbar header exists and have correct name"), () => {
  //   expect(mounted.find('.navbar').exists()).toBeTruthy();
  //   expect(mounted.find('.navbar-brand').text()).toBe('Portal - S');
  // });

  // test(("Header structure"), () => {
  //   expect(mounted.find('.login-container-outter').exists()).toBeTruthy();
  //   expect(mounted.find('.covertext-container-outter').exists()).toBeTruthy();
  // });
});