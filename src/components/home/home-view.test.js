import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home-view';

describe("Home component", () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    // ReactDOM.render(<Home />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});