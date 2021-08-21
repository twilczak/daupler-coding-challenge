import React from 'react';
import {Redirect, Route, Router, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import EventLog from "./EventLog/EventLog";
import Login from "./Login/Login";

import './App.css';

const history = createBrowserHistory();

function App() {
  return (
      <Router history={history}>
        <div className="App">
          <Switch>
              <Route path="/login" component={Login}/>
              <Route path="/events" component={EventLog}/>
              <Route path="/" render={() => <Redirect to="/login"/>}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
