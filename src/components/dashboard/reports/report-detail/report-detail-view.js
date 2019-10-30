import React from 'react';
import './report-detail.scss';
import {useParams} from 'react-router-dom';
import {findReport} from '../../../../utils/report-parser';
import {findMenu} from '../../../../utils/menu-parser';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Chart from 'react-google-charts';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function ReportDetail() {
  const {reportId} = useParams();
  const report = findReport(reportId);
  const menu = findMenu(report.menuId);

  const handleClick = () => {
    window.history.back();
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="w-25">
          <Button variant="dark" className="shadow-sm" onClick={handleClick}>Volver</Button>
        </div>
        <h1>
          <span data-testid="report-category">{menu.title}</span> - <small className="text-muted">{report.title}</small>
        </h1>
        <div className="w-25 d-flex justify-content-end">
          <ToggleButtonGroup type="radio" name="options" defaultValue={1} className="shadow">
            <ToggleButton value={1} variant="dark">Hoy</ToggleButton>
            <ToggleButton value={2} variant="dark">7 días</ToggleButton>
            <ToggleButton value={3} variant="dark">Último mes</ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      <Tabs defaultActiveKey="data" mountOnEnter={true} unmountOnExit={true} id="report-tabs" data-testid="report-tabs">
        <Tab eventKey="data" title="Datos">
          <div className="p-5 bg-white border-right border-left border-bottom shadow-sm">
            <Table striped bordered>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Tab>
        <Tab eventKey="stats" title="Estadísticas">
          <Row
            className="p-5 bg-white border-right border-left border-bottom shadow-sm"
            noGutters
          >
            <Col lg={6}>
              <Chart
                width={'100%'}
                height={'300px'}
                chartType="ScatterChart"
                loader={<div>Loading Chart</div>}
                diffdata={{
                  old: [
                    ['', 'Medicine 1', 'Medicine 2'],
                    [23, null, 12],
                    [9, null, 39],
                    [15, null, 28],
                    [37, null, 30],
                    [21, null, 14],
                    [12, null, 18],
                    [29, null, 34],
                    [8, null, 12],
                    [38, null, 28],
                    [35, null, 12],
                    [26, null, 10],
                    [10, null, 29],
                    [11, null, 10],
                    [27, null, 38],
                    [39, null, 17],
                    [34, null, 20],
                    [38, null, 5],
                    [33, null, 27],
                    [23, null, 39],
                    [12, null, 10],
                    [8, 15, null],
                    [39, 15, null],
                    [27, 31, null],
                    [30, 24, null],
                    [31, 39, null],
                    [35, 6, null],
                    [5, 5, null],
                    [19, 39, null],
                    [22, 8, null],
                    [19, 23, null],
                    [27, 20, null],
                    [11, 6, null],
                    [34, 33, null],
                    [38, 8, null],
                    [39, 29, null],
                    [13, 23, null],
                    [13, 36, null],
                    [39, 6, null],
                    [14, 37, null],
                    [13, 39, null],
                  ],
                  new: [
                    ['', 'Medicine 1', 'Medicine 2'],
                    [22, null, 12],
                    [7, null, 40],
                    [14, null, 31],
                    [37, null, 30],
                    [18, null, 17],
                    [9, null, 20],
                    [26, null, 36],
                    [5, null, 13],
                    [36, null, 30],
                    [35, null, 15],
                    [24, null, 12],
                    [7, null, 31],
                    [10, null, 12],
                    [24, null, 40],
                    [37, null, 18],
                    [32, null, 21],
                    [35, null, 7],
                    [31, null, 30],
                    [21, null, 42],
                    [12, null, 10],
                    [10, 13, null],
                    [40, 12, null],
                    [28, 29, null],
                    [32, 22, null],
                    [31, 37, null],
                    [38, 5, null],
                    [6, 4, null],
                    [21, 36, null],
                    [22, 8, null],
                    [21, 22, null],
                    [28, 17, null],
                    [12, 5, null],
                    [37, 30, null],
                    [41, 7, null],
                    [41, 27, null],
                    [15, 20, null],
                    [14, 36, null],
                    [42, 3, null],
                    [14, 37, null],
                    [15, 36, null],
                  ],
                }}
                options={{
                  hAxis: {viewWindow: {min: 0, max: 50}},
                  vAxis: {viewWindow: {min: 0, max: 50}},
                  theme: 'maximized',
                }}
                rootProps={{'data-testid': '1'}}
              />
            </Col>
            <Col lg={6}>
              <Chart
                width={'100%'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                diffdata={{
                  old: [
                    ['Major', 'Degrees'],
                    ['Business', 256070],
                    ['Education', 108034],
                    ['Social Sciences &amp; History', 127101],
                    ['Health', 81863],
                    ['Psychology', 74194],
                  ],
                  new: [
                    ['Major', 'Degrees'],
                    ['Business', 358293],
                    ['Education', 101265],
                    ['Social Sciences &amp; History', 172780],
                    ['Health', 129634],
                    ['Psychology', 97216],
                  ],
                }}
                options={{
                  pieSliceText: 'none',
                }}
                rootProps={{'data-testid': '2'}}
              />
            </Col>
            <Col className="mt-5" lg={12}>
              <Chart
                width={'100%'}
                height={'300px'}
                chartType="BubbleChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
                  ['CAN', 80.66, 1.67, 'North America', 33739900],
                  ['DEU', 79.84, 1.36, 'Europe', 81902307],
                  ['DNK', 78.6, 1.84, 'Europe', 5523095],
                  ['EGY', 72.73, 2.78, 'Middle East', 79716203],
                  ['GBR', 80.05, 2, 'Europe', 61801570],
                  ['IRN', 72.49, 1.7, 'Middle East', 73137148],
                  ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
                  ['ISR', 81.55, 2.96, 'Middle East', 7485600],
                  ['RUS', 68.6, 1.54, 'Europe', 141850000],
                  ['USA', 78.09, 2.05, 'North America', 307007000],
                ]}
                options={{
                  title:
                    'Correlation between life expectancy, fertility rate ' +
                    'and population of some world countries (2010)',
                  hAxis: {title: 'Life Expectancy'},
                  vAxis: {title: 'Fertility Rate'},
                  bubble: {textStyle: {fontSize: 11}},
                }}
                rootProps={{'data-testid': '1'}}
              />
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </div>
  );
}

export default ReportDetail;