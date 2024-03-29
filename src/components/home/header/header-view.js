import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './header.scss';
import Login from '../../login/login-view';

function Header(params) {
  const {scroll, doLogIn} = params;

  return (
    <header id="cover-container">
      <Navbar
        fixed="top"
        expand="lg"
        variant="light"
        bg="light"
        className={`shadow-sm${!scroll ? ' solid' : ''}`}
      >
        <Container>
          <Navbar.Brand href="/">Portal - S</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="header-container">
        <Row className="d-flex align-items-stretch">
          <Col
            lg={4}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="login-container-outter shadow-sm w-100 p-5">
              <Login doLogIn={doLogIn}></Login>
            </div>
          </Col>
          <Col
            lg={8}
            className="d-flex align-items-center justify-content-end"
          >
            <div className="covertext-container-outter">
              <h1 className="text-light text-center">
                Tus reportes...<br />Al instante
              </h1>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;