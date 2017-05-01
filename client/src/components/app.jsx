import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getToken } from '../actions';

import { Container } from '../style-utils';
import c from '../style-utils/colors';
import styled from 'styled-components';
import Navbar from './navbar';
import AddPackage from './packages/addPackageForm';
import PackageList from './packages/packageList';
import Introduction from './introduction';

class App extends Component {
  componentWillMount() {
    this.props.getToken();
  }

  render() {
    return (
      <div>
        <Navbar token={this.props.token} />
        <MainContainer>
          <Aside>
            <AddPackage />
          </Aside>
          <MainContent>
            <Switch>
              <Route exact path='/info' render={() => {return <h2>credits</h2>}} />
              <Route exact path='/' render={() => (this.props.token ? ( <Redirect to={`/${this.props.token}`} /> ) : ( <Introduction /> ))} />
              <Route path='/:token' component={PackageList} />
            </Switch>
          </MainContent>
        </MainContainer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { token: state.token.tokenShort || state.token.token }
}

export default withRouter(connect(mapStateToProps, { getToken })(App));

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

const Aside = styled.aside`
  width: 30%;
  height: 100%;
  background: ${ c.background.second };
  padding: 40px 40px 0 0;
`;
