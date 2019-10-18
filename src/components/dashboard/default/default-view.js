import React from 'react';
import './default.scss';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

function Default() {
  return (
    <div className="default-site d-flex justify-content-between">
      <h1>Dashboard</h1>
      <ButtonGroup>
        <Button variant="info">1 mes</Button>
        <Button variant="info">3 meses</Button>
        <Button variant="info">6 meses</Button>
      </ButtonGroup>
    </div>
  );
}

export default Default;