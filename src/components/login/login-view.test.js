import React from 'react';
import {shallow} from 'enzyme';
import Login from './login-view';

describe("Login component", () => {
  let component;

  test('renders without crashing', () => {
    component = shallow(<Login />);
    expect(component.exists()).toBeTruthy();
  });

  test(("Container has id"), () => {
    expect(component.find('#login-container').exists()).toBeTruthy();
  });

  test(("Titles"), () => {
    expect(component.find('h3').text()).toBe('Ingresar al sistema');
  });

  test(("inputs"), () => {
    expect(component.find('Form').exists()).toBeTruthy();
    expect(component.find('input#password').exists()).toBeTruthy();
  });

  // test(("login action button"), () => {
  //   const button = mounted.find('button.btn-primary');
  //   expect(button.text()).toBe('Iniciar sesión');
  // });

  // test(("reset password action button"), () => {
  //   const button = mounted.find('button.btn-link');
  //   expect(button.text()).toBe('Recuperar contraseña');
  // });
});