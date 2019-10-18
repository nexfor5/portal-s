import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../home';
import Dashboard from '../dashboard';
import './app.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;