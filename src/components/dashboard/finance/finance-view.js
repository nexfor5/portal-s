import React from 'react';
import './finance.scss';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Finance() {
  return (
    <div className="finance-site">
      <h1>Finanzas</h1>
      <div>
        <Button variant="success" className="mr-4">Todos</Button>
        <Button variant="secondary" className="mr-4">Contabilidad</Button>
        <Button variant="secondary" className="mr-4">Cliente</Button>
        <Button variant="secondary" className="mr-4">Cobranzas</Button>
      </div>
      <Row>
        <Col xl={4} className="mt-5">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/320x200" />
            <Card.Body>
              <Card.Title>Reporte 1</Card.Title>
              <Card.Text>
                Descripción del reporte.<br />
                <Badge variant="success">Contabilidad</Badge>
              </Card.Text>
              <div className="d-flex justify-content-between">
                <Button variant="primary">Detalle</Button>
                <Button variant="outline-dark">Descargar</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} className="mt-5">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/320x200" />
            <Card.Body>
              <Card.Title>Reporte 2</Card.Title>
              <Card.Text>
                Descripción del reporte.<br />
                <Badge variant="success">Cliente</Badge>
              </Card.Text>
              <div className="d-flex justify-content-between">
                <Button variant="primary">Detalle</Button>
                <Button variant="outline-dark">Descargar</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} className="mt-5">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/320x200" />
            <Card.Body>
              <Card.Title>Reporte 3</Card.Title>
              <Card.Text>
                Descripción del reporte.<br />
                <Badge variant="success">Cobranza</Badge>
              </Card.Text>
              <div className="d-flex justify-content-between">
                <Button variant="primary">Detalle</Button>
                <Button variant="outline-dark">Descargar</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} className="mt-5">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/320x200" />
            <Card.Body>
              <Card.Title>Reporte 4</Card.Title>
              <Card.Text>
                Descripción del reporte.<br />
                <Badge variant="success">Cliente</Badge>
                <Badge variant="success" className="ml-1">Cobranza</Badge>
              </Card.Text>
              <div className="d-flex justify-content-between">
                <Button variant="primary">Detalle</Button>
                <Button variant="outline-dark">Descargar</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Finance;