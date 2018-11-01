import React, { Component } from 'react';
import logo from '../logo_transparent.png'
import styled from 'styled-components'

const LogoContainer = styled.img`
  height: 85px;
  position: absolute !important;
  top: 0px;
  left: 15px;
`

class Logo extends Component {
  
  render = () => {
    return (
      <div>
        <LogoContainer src={logo} alt="logo" />
      </div>
    )
  }
    
}

export default Logo