import React from 'react';
import './report-detail.scss';
import {useParams} from 'react-router-dom';
import {findReport} from '../../../../utils/report-parser';

function FinanceDetail(props) {
  const {reportId} = useParams();
  const report = findReport(reportId);

  return (
    <div>
      <h1>Finanzas - <small className="text-muted">{report.title}</small></h1>
    </div>
  );
}

export default FinanceDetail;