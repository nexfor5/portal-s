import React, {useEffect, useState} from 'react';
import Header from './header';
import './home.scss';
import Container from 'react-bootstrap/Container';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useHistory} from 'react-router-dom';

function Home() {
  const [scroll, setScroll] = useState(window.scrollY < 100);
  const history = useHistory();

  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY < 100);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });

  const doLogIn = (data) => {
    console.log(data);
    history.push('/dashboard/default');
  };

  return (
    <div>
      <Header scroll={scroll} doLogIn={doLogIn} />
      <Container>
        <Row>
          <Col className="text-center pt-5 pb-5">
            <FontAwesomeIcon icon="chart-bar" size="6x" />
            <h4>Gráficos</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean malesuada convallis venenatis.
            </p>
          </Col>
          <Col className="text-center pt-5 pb-5">
            <FontAwesomeIcon icon="database" size="6x" />
            <h4>Datos</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean malesuada convallis venenatis.
            </p>
          </Col>
          <Col className="text-center pt-5 pb-5">
            <FontAwesomeIcon icon="file" size="6x" />
            <h4>Información</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean malesuada convallis venenatis.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <p className="text-center">Footer</p>
      </Container>
    </div>
  );
}

export default Home;