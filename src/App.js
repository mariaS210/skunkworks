import React from 'react';
import logo from './logo.svg';
import './App.css';
import SummaryComponent from './components/item/SummaryComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SummaryComponent></SummaryComponent>
        </a>
      </header>
    </div>
  );
}

export default App;
