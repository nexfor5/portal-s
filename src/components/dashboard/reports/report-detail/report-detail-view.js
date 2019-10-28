import React from 'react';
import './report-detail.scss';
import {useParams} from 'react-router-dom';
import {findReport} from '../../../../utils/report-parser';
import {findMenu} from '../../../../utils/menu-parser';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function ReportDetail() {
  const {reportId} = useParams();
  const report = findReport(reportId);
  const menu = findMenu(report.menuId);

  return (
    <div>
      <h1>
        <span data-testid="report-name">{menu.title}</span>
        -
        <small className="text-muted">{report.title}</small>
      </h1>
      <Tabs defaultActiveKey="data" id="report-tabs" data-testid="report-tabs">
        <Tab eventKey="data" title="Datos">
          1
        </Tab>
        <Tab eventKey="stats" title="Estadísticas">
          2
        </Tab>
      </Tabs>
    </div>
  );
}

export default ReportDetail;