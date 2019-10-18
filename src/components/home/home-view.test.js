import React from 'react';
import Home from './home-view';
import {render, fireEvent} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

describe("Home site", () => {
  const {getByText, getByTestId} = render(<MemoryRouter><Home /></MemoryRouter>);
  const loginButton = getByText('Iniciar sesión');
  const resetButton = getByText('Recuperar contraseña');
  const emailInput = getByTestId('email-input');
  const passwordInput = getByTestId('password-input');

  test('Elements exists', () => {
    expect(loginButton).toBeEnabled();
    expect(resetButton).toBeEnabled();

    expect(emailInput).toBeEnabled();
    expect(emailInput).toBeRequired();
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(emailInput).toHaveAttribute('placeholder', 'correo@ejemplo.cl');

    expect(passwordInput).toBeEnabled();
    expect(passwordInput).toBeRequired();
    expect(passwordInput).toHaveAttribute('type', 'password');
    expect(passwordInput).toHaveAttribute('minlength', '8');
    expect(passwordInput).toHaveAttribute('placeholder', '********');
  });

  test('Set email and password', () => {
    fireEvent.change(emailInput, {target: {value: 'correo@gmail.com'}});
    fireEvent.change(passwordInput, {target: {value: '12345678'}});
    expect(emailInput).toBeValid();
    expect(passwordInput).toBeValid();
  });
});