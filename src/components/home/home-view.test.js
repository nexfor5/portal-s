import React from 'react';
import ReactDOM from 'react-dom';
// import {shallow} from 'enzyme';
import Home from './home-view';


describe("Home component", () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // const wrapper = shallow(<Home />);
});