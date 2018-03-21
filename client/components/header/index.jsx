import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from '../elements/logo';

export default class Header extends Component {
    render() {
        return (
            <Wrap>
                <Logo />
                Header
            </Wrap>
        );
    }
}

const Wrap = styled.div`
    height: 80px;
    background-color: #EDF7FC;
`;