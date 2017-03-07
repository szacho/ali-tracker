import React, { Component } from 'react';
import styled from 'styled-components';

import AddPackage from './addPackage';

class Sidebar extends Component {
  render() {
    return(
      <Aside>
        {/* <AddPackageLabel>Dodaj przesyłkę..</AddPackageLabel> */}
        <AddPackage />
      </Aside>
    );
  }
}

export default Sidebar;

const Aside = styled.aside`
  width: 30%;
  height: 100%;
  background: #fafafa;
  padding: 10px 40px 0 0;
`;

const AddPackageLabel = styled.span`
  font-size: 1.4rem;

`;
