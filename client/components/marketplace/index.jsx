import React, { Component } from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const NUMBER = 32;

export default class Marketplace extends Component {
  get items() {
    let arr = new Array(NUMBER).fill(0);

    return arr.map((item, idx) => {
      return (
        <Item key={idx} delay={idx}>
          <Icon name="bitcoin" size="4x" />
        </Item>
      );
    });
  }

  render() {
    return (
      <div>
        <Content>
          <Title>Oracles Marketplace</Title>
        </Content>
        <List>{this.items}</List>;
      </div>
    );
  }
}

const List = styled.div`
  font-size: 1.4rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
`;
const Item = styled.div`
  height: 150px;
  background-color: ${props => props.theme.color.background.gray};
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  transform: translateY(2.4rem);
  animation: oracleCardIn 0.25s cubic-bezier(0.06, 0.67, 0.37, 0.99) forwards;
  animation-delay: ${props => (props.delay ? props.delay * 0.05 : 0)}s;
`;
const Icon = styled(FontAwesome) `
  color: ${props => props.theme.color.icons.main};
`;

const Content = styled.div`
  text-align: center;
  height: 100px;
  padding-top: 50px;
`;

const Title = styled.h1`
  font-size: 4rem;
`;
