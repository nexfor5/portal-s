import React from 'react';
import App from './app';
import {shallow} from 'enzyme';

let component;

test('renders without crashing', () => {
  component = shallow(<App />);
  expect(component.exists()).toBeTruthy();
});