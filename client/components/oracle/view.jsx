import React, { Component } from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

import Editor from '../elements/Editor';
import Btn from '../elements/btn';

export default class Oracule extends Component {
  state = {
    title: '',
    description: ''
  };

  componentDidMount() {
    const { id } = this.props;

    axios.get(`/api/oracle/${id}`).then(res => {
      this.setState(state => ({
        ...state,
        ...res.data
      }))
    });
  }

  onSubmit = () => {
    const { title, description } = this.state;
  };

  render() {
    const { id } = this.props;

    return (
      <Content>
        <Title>Oracle: {id}</Title>
        <Header>{this.state.title}</Header>
        <ReactMarkdown source={this.state.description} />
        <Actions>
          <Btn title={'Join'} onClick={this.onSubmit} />
        </Actions>
      </Content>
    );
  }
}

const Cont = styled.div`
  flex-grow: 1;
`;

const Content = styled.div`
  padding-top: 20px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 30px;
  text-align: center;
`;

const Header = styled.div`
  box-sizing: border-box;
  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px solid ${props => props.theme.color.icons.main};
  outline: none;
  padding: 10px;
  font-size: 1.5rem;
  width: 100%;
  border-radius: 4px;
`;

const Actions = styled.div`
  margin-top: 50px;
`;
