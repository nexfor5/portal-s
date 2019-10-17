import React from 'react';
import {shallow} from 'enzyme';
import Header from './header-view';

describe("Header component", () => {
  let component;

  test('renders without crashing', () => {
    component = shallow(<Header scroll={0} />);
    expect(component.exists()).toBeTruthy();
  });

  test(("Cover container has id for background"), () => {
    expect(component.find('#cover-container').exists()).toBeTruthy();
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