import React from 'react';
import './dashboard.scss';
import Container from 'react-bootstrap/Container';
import {Route, Switch, NavLink, Link, useRouteMatch, useHistory} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Finance from './finance';
import DashboardView from './dashboard-view';

function DashboardContainer() {
  const {path, url} = useRouteMatch();
  const history = useHistory();

  const navigateTo = (page) => {
    history.push(page);
  };

  return (
    <Container fluid className="main-container">
      <Row className="d-flex justify-content-between" noGutters>
        <Col xl={2} lg={3} className="d-flex align-items-stretch flex-column side-nav">
          <div className="brand d-flex align-items-center border-secondary border-bottom border-right">
            <Link to={`${url}/default`} className="navbar-brand text-light">Portal - S</Link>
          </div>
          <div className="organization text-center p-5">
            <h3 className="text-light p-1">Empresa A</h3>
            <Image className="shadow-sm" src="https://via.placeholder.com/150" rounded />
          </div>
          <Nav className="flex-column border-right border-secondary w-100">
            <NavLink className="nav-link" to={`${url}/default`}>Dashboard</NavLink>
            <NavLink className="nav-link" to={`${url}/finance`}>Finanzas</NavLink>
            <NavLink className="nav-link" to={`${url}/comercial`}>Comercial</NavLink>
            <NavLink className="nav-link" to={`${url}/operation`}>Operaciones</NavLink>
            <NavLink className="nav-link" to={`${url}/business`}>Gestión de negocios</NavLink>
            <NavLink className="nav-link" to={`${url}/rrhh`}>RR.HH.</NavLink>
          </Nav>
        </Col>
        <Col xl={10} lg={9}>
          <Navbar
            expand="lg"
            variant="dark"
            bg="dark"
            className="shadow-sm justify-content-between"
            data-testid="navbar"
          >
            <div>
              <FontAwesomeIcon icon="chart-bar" className="text-light" />
            </div>
            <div className="user-info">
              <Image className="m-1 mr-3" src="https://via.placeholder.com/24" roundedCircle />
              <Navbar.Text>
                <a href="#login">Nombre Apellido</a>
              </Navbar.Text>
            </div>
          </Navbar>
          <div className="content-container">
            <Switch>
              <Route exact path={`${path}/default`}>
                <DashboardView navigateTo={navigateTo}></DashboardView>
              </Route>
              <Route path={`${path}/finance`}>
                <Finance navigateTo={navigateTo} />
              </Route>
            </Switch>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DashboardContainer;