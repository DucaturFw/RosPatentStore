import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import './styles/styles.css';

import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
          <Router>
            <Main />
          </Router>
          <Footer />
        </Container>
      </ThemeProvider>
    );
  }
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
