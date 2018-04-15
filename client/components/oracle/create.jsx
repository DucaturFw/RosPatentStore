import React, { Component } from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import axios from 'axios';

import Editor from '../elements/Editor';
import Btn from '../elements/btn';

import wallet from '../../models/wallet';

export default class Oracule extends Component {
  state = {
    id: null,
    title: '',
    description: '',
    email: '',
    done: false
  };

  onEditChange = description => {
    this.setState({ description });
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = () => {
    window.aplaEvo.sendTransaction({
      name: 'add_full_patent',
      data: {
        name: `${this.state.title}`,
        description: `${this.state.description}`,
        additional: `${this.state.additional}`,
        patent_date: `${Date.now() + 86400 * 365}`,
        expiration_date: `${Date.now() + 86400 * 365 * 2}`
      },
      text: {
        title: "Заявка на регистрацию",
        description: `${this.state.title}`
      }
    });
  };

  render() {
    if (this.state.done) {
      return (
        <Content>
          <Title>Added pull oracles with id: {this.state.id}</Title>
        </Content>
      );
    }

    return (
      <Content>
        <Title>Заявка на регистрацию прав на изобретение</Title>
        <Input onChange={this.onChange} name="title" placeholder="Название" />
        {/* <select>
          <option>Huy</option>
        </select> */}
        <Title style={{ textAlign: 'left', }}>Описание изобретения:</Title>
        <Editor canEdit={false} onChange={this.onEditChange} />
        <div>
          <Btn title={'Отправить'} onClick={this.onSubmit} />
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
