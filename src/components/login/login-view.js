import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useForm from 'react-hook-form';
import './login.scss';

function Login() {
  const {register, handleSubmit} = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // props.history.push('/login');
  };

  return (
    <div id="login-container">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-center">Ingresar al sistema</h3>
        <Form.Group controlId="email">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control name="email" required type="email" placeholder="correo@ejemplo.cl" ref={register} />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control name="password" required minLength={8} type="password" placeholder="********" ref={register} />
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