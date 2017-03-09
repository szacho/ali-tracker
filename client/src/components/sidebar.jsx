import React, { Component } from 'react';
import styled from 'styled-components';
import cls from '../style-utils/colors';

import AddPackage from './packages/addPackageForm';

class Sidebar extends Component {
  render() {
    return(
      <Aside>
        <AddPackage />
      </Aside>
    );
  }
}

export default Sidebar;

const Aside = styled.aside`
  width: 30%;
  height: 100%;
  background: ${ cls.background.second };
  padding: 10px 40px 0 0;
`;
