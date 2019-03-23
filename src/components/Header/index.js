// @flow
import React from 'react';
import styled from 'styled-components';
import logo from '../../logo.svg';

type Child = string | Object;
type Props = {
    children: ?Child,
    name: ?string,
    style: ?Object,
    label: ?string
};

const Header = (props:Props) => {
    const {children, style} = props;
    return (
        <Container style={style}>
            <img src={logo} className="App-logo" alt="logo" />
            {children}
            <H1>Todo List</H1>
        </Container>
    );
};

const Container = styled.header`
  background-color: #282c34;
    display: flex;
    flex-direction: row;
    height: 50px;
    flex-shrink: 0;
`;

const H1 = styled.h1`
    color: #61dafb;
    margin: 0;
    line-height: 50px;
`;

export default Header;
