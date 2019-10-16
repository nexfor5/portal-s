import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faChartBar, faDatabase, faFile} from '@fortawesome/free-solid-svg-icons';
import Home from '../home';
import './app.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

library.add(faChartBar, faDatabase, faFile);

export default App;