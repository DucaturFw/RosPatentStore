import React, { Component } from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './styles/theme';
import './styles/styles.css';


import Header from './components/header';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header/>
          <header className="App-header">
              <h1 className="App-title">Welcome to Ducatur</h1>
          </header>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
