import React, { Component } from 'react';
import styled from 'styled-components';
import cls from '../style-utils/colors'

class Sidebar extends Component {
  render() {
    return(
      <Aside>Hello</Aside>
    );
  }
}

export default Sidebar;

const Aside = styled.aside`
  width: 30%;
  height: 100%;
  background: ${ cls.dev };
`;
