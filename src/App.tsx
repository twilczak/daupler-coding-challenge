import React from 'react';
import {Redirect, Route, Router, Switch} from 'react-router-dom';
import {Provider} from "react-redux";
import {createBrowserHistory} from 'history';

import Store from './Store/Store';
import EventLog from "./EventLog/EventLog";
import Login from "./Login/Login";

import './App.css';

const history = createBrowserHistory();

function App() {
  return (
      <Provider store={Store}>
          <Router history={history}>
            <div className="App">
              <Switch>
                  <Route path="/login" component={Login}/>
                  <Route path="/eventLog" component={EventLog}/>
                  <Route path="/" render={() => <Redirect to="/login"/>}/>
              </Switch>
            </div>
          </Router>
      </Provider>
  );
}

export default App;
