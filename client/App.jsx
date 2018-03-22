import React, { Component } from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './styles/theme';
import './styles/styles.css';

import Header from './components/header';
import Main from './components/main';

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Header/>
          <Main/>
        </div>
      </ThemeProvider>
    );
  }
}