import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Container } from '../style-utils';
import styled from 'styled-components';
import Navbar from './navbar';
import Sidebar from './sidebar';
import * as views from './views';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { windowHeight: window.innerHeight - 43 };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ windowHeight: window.innerHeight - 43 });
  };

  render() {
    return (
      <div>
        <Navbar />
        <MainContainer height={this.state.windowHeight}>
          <Sidebar />
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
  height: ${props => props.height}px;
  margin: 0 auto;
  font-size: 2rem;
  display: flex;

`;
