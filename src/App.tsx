import React from 'react';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import logo from './logo.svg';
import './App.css';

const history = createBrowserHistory();

function App() {
  return (
      <Router history={history}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Router>
  );
}

export default App;
