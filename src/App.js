import React from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  var today = new Date();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          changed in feature branch
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        {today}
        </a>
      </header>
    </div>
  );
}

export default App;
