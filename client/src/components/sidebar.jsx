import React, { Component } from 'react';
import styled from 'styled-components';
import c from '../style-utils/colors';
import { Switch, Route } from 'react-router-dom';

import AddPackage from './packages/addPackageForm';

class Sidebar extends Component {
  render() {
    return(
      <Aside>
        <Switch>
          <Route exact path='/statystyki' render={() => {return <h2>ranking</h2>}} />
          <Route exact path='/opcje' render={() => {return <h2>opcje</h2>}} />
          <Route path='*' component={AddPackage} />
        </Switch>
      </Aside>
    );
  }
}

export default Sidebar;

const Aside = styled.aside`
  width: 30%;
  height: 100%;
  background: ${ c.background.second };
  padding: 10px 40px 0 0;
`;
