import React from 'react';
import './dashboard.scss';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardResume from './card-resume';
import Chart from 'react-google-charts';

function DashboardView(props) {
  return (
    <div>
      <div className="default-site d-flex align-items-center justify-content-between">
        <h1 data-testid="dashboard-title">Dashboard</h1>
        <ToggleButtonGroup type="radio" name="options" defaultValue={1} className="shadow">
          <ToggleButton value={1} variant="dark">Hoy</ToggleButton>
          <ToggleButton value={2} variant="dark">7 días</ToggleButton>
          <ToggleButton value={3} variant="dark">Último mes</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <Row className="pt-5">
        <Col>
          <CardResume name="Ingresos" value="$200.000" icon="file-import" color="success" navigateTo={props.navigateTo} to="ganancias"></CardResume>
        </Col>
        <Col>
          <CardResume name="Egresos" value="$100.000" icon="file-export" color="danger" navigateTo={props.navigateTo} to="gastos"></CardResume>
        </Col>
        <Col>
          <CardResume name="Ventas" value="10" icon="handshake" color="primary" navigateTo={props.navigateTo} to="ventas"></CardResume>
        </Col>
        <Col>
          <CardResume name="Compras" value="20" icon="shopping-cart" color="warning" navigateTo={props.navigateTo} to="compras"></CardResume>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col lg={6}>
          <Chart
            width={'100%'}
            height={'300px'}
            chartType="BarChart"
            loader={<div>Cargando...</div>}
            data={[
              ['Categoría', 'Ventas', {role: 'style'}],
              ['Peluches', 100000, '#28a745'],
              ['Comida', 800000, '#dc3545'],
              ['Ropa', 350000, '#007bff'],
              ['Pescados', 234000, '#ffc107'],
            ]}
            options={{
              title: 'Ventas por categorías',
              bar: {groupWidth: '95%'},
              legend: {position: 'none'},
            }}
            rootProps={{'className': 'shadow-sm'}}
          />
        </Col>
        <Col lg={6}>
          <Chart
            width={'100%'}
            height={'300px'}
            chartType="AreaChart"
            loader={<div>Cargando...</div>}
            data={[
              ['Hora', 'Ingresos', 'Egresos'],
              ['08 - 10', 200000, 300000],
              ['10 - 12', 234000, 310000],
              ['12 - 14', 434000, 320000],
              ['14 - 16', 500000, 329000],
              ['16 - 18', 700000, 350000],
            ]}
            options={{
              title: 'Performance de la empresa',
              hAxis: {title: 'Hora', titleTextStyle: {color: '#333'}},
              vAxis: {minValue: 0},
              chartArea: {width: '60%', height: '70%'},
            }}
            rootProps={{'className': 'shadow-sm'}}
          />
        </Col>
      </Row>
    </div>
  );
}

export default DashboardView;