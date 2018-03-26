import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

import Logo from '../elements/logo';
import Wrapper from '../elements/Wrapper';

export default class Header extends Component {
  render() {
    return (
      <Cont>
        <Wrapper>
          <Inner>
            <Left>
              <StyleLink to={'/'}>
                <Logo />
                <Title>Ducatur</Title>
              </StyleLink>
            </Left>
            <Right>
              <Signing>Sign in</Signing>
              <FontAwesome name="sign-in" size="2x" />
            </Right>
          </Inner>
        </Wrapper>
      </Cont>
    );
  }
}

const Cont = styled.div`
  flex-shrink: 0;
  height: 80px;
  font-size: 1.4rem;
  background-color: ${props => props.theme.color.background.main};
`;

const Inner = styled.div`
  display: flex;
  padding-top: 13px;
  justify-content: space-between;
`;

const Title = styled.h3`
  margin-left: 15px;
  margin-top: 14px;
  font-weight: 400;
`;

const Left = styled.div`
  display: flex;
`;
const Right = styled.div`
  margin-top: 13px;
`;

const Signing = styled.span`
  vertical-align: super;
  margin-right: 10px;
`;

const StyleLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: inherit;
`;
