import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import Login from './login-view';

describe("Login component", () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    // ReactDOM.render(<Login />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //Shallow
  const shallowed = shallow(<Login />);

  test(("Container has id"), () => {
    expect(shallowed.find('#login-container').exists()).toBeTruthy();
  });

  test(("Titles"), () => {
    expect(shallowed.find('h3').text()).toBe('Ingresar al sistema');
  });

  //Mount
  // const mounted = mount(<Login />);

  // test(("inputs"), () => {
  //   expect(mounted.find('input#email').exists()).toBeTruthy();
  //   expect(mounted.find('input#password').exists()).toBeTruthy();
  // });

  // test(("login action button"), () => {
  //   const button = mounted.find('button.btn-primary');
  //   expect(button.text()).toBe('Iniciar sesión');
  // });

  // test(("reset password action button"), () => {
  //   const button = mounted.find('button.btn-link');
  //   expect(button.text()).toBe('Recuperar contraseña');
  // });
});