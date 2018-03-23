import React, { Component } from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

import Logo from '../elements/logo';
import Wrapper from '../elements/Wrapper';

export default class Footer extends Component {
  render() {
    return (
      <Cont>
        <Wrapper>
          <Inner>
            <Left>
              <List>
                <Item>
                  <Link>Marketplace</Link>
                </Item>
                <Item>
                  <Link>FAQs</Link>
                </Item>
                <Item>
                  <Link>HELP</Link>
                </Item>
                <Item>
                  <Link>Support</Link>
                </Item>
              </List>
              <List>
                <Item>
                  <Link>About</Link>
                </Item>
                <Item>
                  <Link>Press</Link>
                </Item>
                <Item>
                  <Link>Tech details</Link>
                </Item>
              </List>
            </Left>
            <Right>
              <Logo />
              <Title>Ducatur</Title>
            </Right>
          </Inner>
          <Politics>
            <Link>Terms of use</Link>
            <Link>Privacy policy</Link>
          </Politics>
        </Wrapper>
      </Cont>
    );
  }
}

const Cont = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 220px;
  font-size: 1.4rem;
  background-color: ${props => props.theme.color.background.main};
  margin-top: 50px;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 30px auto 0;
`;

const Right = styled.div`
  text-align: center;
  margin-top: 10px;
`;
const Title = styled.h4`
  font-weight: 400;
`;

const Left = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Item = styled.li`
  font-size: 1.5rem;
  margin-top: 5px;
`;
const Link = styled.a`
  cursor: pointer;
  margin: 0 2.4rem;
`;

const Politics = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
