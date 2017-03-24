import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


import { Container } from '../style-utils';
import styled from 'styled-components';
import Navbar from './navbar';
import Sidebar from './sidebar';
import PackageList from './packages/packageList';
import Introduction from './introduction';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { token: null };
  }

  componentWillMount() {
    if(window.localStorage.getItem('token')) {
      const token = JSON.parse(window.localStorage.getItem('token'));
      this.setState({ token });
    } else {
      this.setState({ token: null });
    }
  }

  render() {
    return (
      <div>
        <Navbar token={this.state.token} />
        <MainContainer>
          <Sidebar />
          <MainContent>
            <Switch>
              <Route exact path='/statystyki' render={() => {return <h2>stats?</h2>}} />
              <Route exact path='/opcje' render={() => {return <h2>lista lub komunikat</h2>}} />
              <Route exact path='/info' render={() => {return <h2>credits</h2>}} />
              <Route exact path='/' render={() => (this.state.token ? ( <Redirect to={`/${this.state.token}`} /> ) : ( <Introduction /> ))} />
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
