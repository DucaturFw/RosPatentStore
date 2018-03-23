import React, { Component } from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

import Wrapper from '../elements/Wrapper';

export default class Main extends Component {
  render() {
    return (
      <Cont>
        <Wrapper>
          <Inner>
            <Content>
              <Title>Welcome to Ducatur</Title>
            </Content>
          </Inner>
        </Wrapper>
      </Cont>
    );
  }
}

const Cont = styled.div`
  flex-grow: 1;
`;

const Inner = styled.div`
  text-align: center;
`;

const Content = styled.div`
  height: 200px;
  padding-top: 50px;
`;

const Title = styled.h1`
  font-size: 4rem;
`;
