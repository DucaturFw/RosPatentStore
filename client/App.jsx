import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import './styles/styles.css';

import Main from './components/elements/Main';
import Header from './components/header';
import Marketplace from './components/marketplace';
import Oracle from './components/oracle';
import Footer from './components/footer';

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
          <Router>
            <Main>
              <Route exact path={'/'} component={Marketplace} />
              <Route path={'/oracle/:id'} component={Oracle} />
            </Main>
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
