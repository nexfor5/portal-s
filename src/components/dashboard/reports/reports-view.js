import React from 'react';
import './reports.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CardReport from '../card-report';
import {filterReportByMenuId} from '../../../utils/report-parser';

function ReportsView(params) {
  const reports = filterReportByMenuId(params.menu.menuId).map((report) => {
    report.navigateTo = params.navigateTo;
    return report;
  });

  return (
    <div>
      <h1>{params.menu.title}</h1>
      <div>
        <Button variant="success" className="mr-4 shadow-sm">Todos</Button>
        {params.menu.tags.map((tag) => (
          <Button
            variant="secondary"
            data-testid={`filter-${tag}`}
            className="mr-4 shadow-sm"
            key={tag}
          >
            {tag}
          </Button>
        ))}
      </div>
      <Row>
        {reports.map((report) => (
          <Col lg={4} xl={3} className="mt-5" key={report.reportId}>
            <CardReport {...report}></CardReport>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ReportsView;