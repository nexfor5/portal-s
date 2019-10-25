import React from 'react';
import './finance.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CardReport from '../card-report';
import {reports} from '../../../utils/report-name-parser';

function FinanceView(params) {
  const paramsData = reports.map((report) => {
    report.navigateTo = params.navigateTo;
    return report;
  });

  return (
    <div>
      <h1>Finanzas</h1>
      <div>
        <Button variant="success" className="mr-4 shadow-sm">Todos</Button>
        <Button variant="secondary" className="mr-4 shadow-sm">Contabilidad</Button>
        <Button variant="secondary" className="mr-4 shadow-sm">Cliente</Button>
        <Button variant="secondary" className="mr-4 shadow-sm">Cobranzas</Button>
      </div>
      <Row>
        {paramsData.map((item) => (
          <Col lg={4} xl={3} className="mt-5" key={item.reportId}>
            <CardReport {...item}></CardReport>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default FinanceView;