import React, { Component } from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

import Wrapper from '../elements/Wrapper';

export default class Main extends Component {
    render() {
        return (
            <Wrapper>
                <Inner>
                    <Content>
                        <Title>Welcome to Ducatur</Title>
                    </Content>
                </Inner>
            </Wrapper>
        );
    }
}

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