import React, { Component } from 'react';
import './styles/styles.css';


import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <header className="App-header">
            <h1 className="App-title">Welcome to Ducatur</h1>
        </header>
      </div>
    );
  }
}

export default App;
