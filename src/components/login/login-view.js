import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useForm from 'react-hook-form';
import './login.scss';

function Login(props) {
  const {register, handleSubmit} = useForm();
  const {doLogIn} = props;

  return (
    <div className="login-container">
      <Form onSubmit={handleSubmit(doLogIn)} data-testid="login-form">
        <h3 className="text-center">Ingresar al sistema</h3>
        <Form.Group controlId="email">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            data-testid="email-input"
            name="email"
            required
            type="email"
            placeholder="correo@ejemplo.cl"
            ref={register}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            data-testid="password-input"
            name="password"
            required
            minLength={8}
            type="password"
            placeholder="********"
            ref={register}
          />
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