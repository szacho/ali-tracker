import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Container } from '../style-utils';
import styled from 'styled-components';
import Navbar from './navbar';
import * as views from './views';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MainContainer>
          <Switch>
            <Route exact path="/" component={views.homepage}/>
            <Route path="/statystyki" component={views.statistics}/>
            <Route path="/opcje" component={views.options}/>
            <Route path="/info" component={views.info}/>
            <Route path="/:token" component={views.tokenpage}/>
            {/* <Route component={NoMatch}/> */}
          </Switch>
        </MainContainer>
      </div>
    );
  }
}

export default App;

const MainContainer = styled(Container)`
  background: papayawhip;
  min-height: 80vh;
  margin: 20px auto;
  font-size: 2rem;
`;
