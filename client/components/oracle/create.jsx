import React, { Component } from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

import Editor from '../elements/Editor';
import Btn from '../elements/btn';

export default class Oracule extends Component {
  state = {
    title: '',
    description: ''
  };

  onTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  onEditChange = description => {
    this.setState({ description });
  };

  onSubmit = () => {
    const { title, description } = this.state;

    // Do something with results
  };

  render() {
    return (
      <Content>
        <Title>Create new pull oracles</Title>
        <Input onChange={this.onTitleChange} />
        <Editor canEdit={false} onChange={this.onEditChange} />
        <div>
          <Btn title={'Create'} onClick={this.onSubmit} />
        </div>
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

const Input = styled.input`
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
