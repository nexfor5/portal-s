import React from 'react';
import {shallow} from 'enzyme';
import Home from './home-view';

describe("Home component", () => {
  let component;

  test('renders without crashing', () => {
    component = shallow(<Home />);
    expect(component.exists()).toBeTruthy();
  });
});