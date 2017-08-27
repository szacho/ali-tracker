import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getToken } from '../../actions';

import Navbar from '../Navbar/navbar';
import AddPackage from '../PackageForm/addPackageForm';
import PackageList from '../PackagesList/packagesList';
import Introduction from '../Introduction/introduction';
import Information from '../Information/information';
import '../../styles/index.css';
class App extends Component {
  componentWillMount() {
    this.props.getToken();
  }

  render() {
    return (
      <div>
        <Navbar token={this.props.token} />
        <main id="main" className="l-flex">
          <AddPackage />
          <Switch>
            <Route exact path='/info' render={() => {return <Information />}} />
            <Route exact path='/' render={() => (this.props.token ? ( <Redirect to={`/${this.props.token}`} /> ) : ( <Introduction token={this.props.token} /> ))} />
            <Route path='/:token' component={PackageList} />
          </Switch>
        </main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { token: state.token.tokenShort || state.token.token }
}

export default withRouter(connect(mapStateToProps, { getToken })(App));
