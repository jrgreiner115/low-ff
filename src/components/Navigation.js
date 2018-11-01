import React, { Component } from 'react';
import Logo from './Logo'
import styled from 'styled-components'
// {/* <Menu />
// <Account /> */}
const Container = styled.div`
  overflow: hidden;
  background-color: #40a798;  
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 85px;
  box-shadow: 0px 6px 7px -3px #999;
  z-index: 1000;
  
`;

const MenuOption = styled.a`
  color: #fff;
`;

class Navigation extends Component {
  
  render = () => {
    return (
      <Container>
        <Logo />
        <MenuOption href='google.com'>FAQ</MenuOption>
        <MenuOption>Docs</MenuOption>
        <MenuOption href='google.com'>Premium</MenuOption>
        <MenuOption>Settings</MenuOption>
      </Container>
      
    )
  }
    
}

export default Navigation