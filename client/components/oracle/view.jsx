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
    showContrcat: false,
    isLoaded: false,
  };

  componentDidMount() {
    const { id } = this.props;

    axios.get(`/api/oracle/${id}`).then(res => {
      this.setState(state => ({
        ...state,
        isLoaded: true,
        ...res.data
      }));
    });

    axios.get(CONTRACT_URL).then(res => {
      this.setCode(res.data);
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
    document.getElementById('remix').contentWindow.location.reload();
  };

  setCode(code) {
    const filename = 'custom.sol';
    const config = `{"left-offset":205,"right-offset":252,"terminal-top-offset":694,"currentFile":"browser/${filename}","autoCompile":false}`;

    window.localStorage.setItem(`sol:${filename}`, code);
    window.localStorage.setItem('sol:.remix.config', config);
  }

  render() {
    const { id } = this.props;

    if (!this.state.isLoaded) {
      return (
        <Content>
          <Title>
            <Icon
              name={'spinner'}
              size={'4x'}
              spin
            />
          </Title>
        </Content>
      )
    }

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
            src={'/browser-solidity/#version=soljson-v0.4.18+commit.9cf6e910.js'}
          />
        </Popover>
      </Content>
    );
  }
}


const Icon = styled(FontAwesome) `
  color: ${props => props.theme.color.background.main};
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
  position: ${props => props.show ? 'fixed' : 'absolute'};
  z-index: ${props => props.show ? 10 : -10};
  top: 80px;
  bottom: 0;
  left: ${props => props.show ? 0 : '100%'};
  right: 0;
background: white;
display: block;
`;

const IDE = styled.iframe`
width: 100%;
height: 100%;
`;
