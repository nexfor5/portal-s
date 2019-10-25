import React from 'react';
import './finance.scss';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import FinanceView from './finance-view';
import FinanceDetail from './finance-detail';

function FinanceContainer(props) {
  const {path} = useRouteMatch();

  return (
    <div className="finance-site">
      <Switch>
        <Route exact path={`${path}`}>
          <FinanceView navigateTo={props.navigateTo}></FinanceView>
        </Route>
        <Route exact path={`${path}/:reportId`}>
          <FinanceDetail></FinanceDetail>
        </Route>
      </Switch>
    </div>
  );
}

export default FinanceContainer;