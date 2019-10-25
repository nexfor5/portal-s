import React from 'react';
import './reports.scss';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import ReportsView from './reports-view';
import ReportDetail from './report-detail';
import {findMenu} from '../../../utils/menu-parser';

function ReportsContainer(props) {
  const {path} = useRouteMatch();
  const menu = findMenu(path.split('/').pop());

  return (
    <div className="reports-site">
      <Switch>
        <Route exact path={`${path}`}>
          <ReportsView navigateTo={props.navigateTo} menu={menu}></ReportsView>
        </Route>
        <Route exact path={`${path}/:reportId`}>
          <ReportDetail></ReportDetail>
        </Route>
      </Switch>
    </div>
  );
}

export default ReportsContainer;