import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './login.scss';

function Login() {
  return (
    <div id="login-container">
      <Form>
        <h3 className="text-center">Ingresar al sistema</h3>
        <Form.Group controlId="email">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" placeholder="correo@ejemplo.cl" />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="********" />
        </Form.Group>
        <Button variant="primary" type="submit" block>
          Iniciar sesión
        </Button>
        <Button variant="link" type="button" block>
          Recuperar contraseña
        </Button>
      </Form>
    </div>
  );
}

export default Login;