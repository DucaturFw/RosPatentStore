import React, { Component } from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

import Editor from '../elements/Editor';
import Btn from '../elements/btn';

import wallet from '../../models/wallet';

const CONTRACT_URL = 'https://raw.githubusercontent.com/DucaturFw/elastico/master/contracts/elastico.sol';

export default class Oracule extends Component {
  state = {
    title: '',
    description: '',
    email: '',
    contract: '',
    showContrcat: false
  };

  componentDidMount() {
    const { id } = this.props;

    axios.get(`/api/oracle/${id}`).then(res => {
      this.setState(state => ({
        ...state,
        ...res.data
      }));
    });

    axios.get(CONTRACT_URL).then(res => {
      this.setState(state => ({
        ...state,
        contract: res.data
      }));
    })
  }

  onJoin = () => {
    wallet.send(0.1);
  };

  onBuy = () => {
    this.setState(state => ({
      ...state,
      showContrcat: true
    }));
  };

  setCode(code) {
    let config = '{"left-offset":205,"right-offset":252,"terminal-top-offset":694,"currentFile":"browser/custom.sol","autoCompile":false}';
    window.localStorage.setItem('sol:custom.sol', code);
    window.localStorage.setItem('sol:.remix.config', config);

    document.getElementById('remix').contentWindow.location.reload();
  }

  render() {
    const { id } = this.props;

    return (
      <Content>
        <Title>Oracle: {id}</Title>
        <Header>{this.state.title}</Header>
        <Header>{this.state.email}</Header>
        <ReactMarkdown source={this.state.description} />
        <Actions>
          <Btn title={'Join'} onClick={this.onJoin} />
          <Btn title={'Buy'} onClick={this.onBuy} />
        </Actions>
        <Popover show={this.state.showContrcat}>
          <IDE
            id="remix"
            src={'/remix/'}
          />
        </Popover>
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
  display: flex;
`;

const Popover = styled.div`
  position: fixed;
  top: 80px;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  display: ${props => props.show ? 'block' : 'none'};
`;

const IDE = styled.iframe`
  width: 100%;
  height: 100%;
`;
