import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Container } from '../style-utils';
import styled from 'styled-components';
import Navbar from './navbar';
import Sidebar from './sidebar';
import PackageList from './packages/packageList';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MainContainer>
          <Sidebar />
          <MainContent>
            <Switch>
              <Route exact path='/' render={() => {return <h2>introduction</h2>}} />
              <Route exact path='/statystyki' render={() => {return <h2>stats?</h2>}} />
              <Route exact path='/opcje' render={() => {return <h2>lista lub komunikat</h2>}} />
              <Route exact path='/info' render={() => {return <h2>credits</h2>}} />
              <Route path='/:token' component={PackageList} />
            </Switch>
          </MainContent>
        </MainContainer>
      </div>
    );
  }
}

export default App;

const MainContainer = styled(Container)`
  margin: 0 auto;
  font-size: 2rem;
  display: flex;
`;

const MainContent = styled.main`
  width: 70%;
  height: 100%;
  padding: 20px 40px;
`;
