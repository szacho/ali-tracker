import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import PackageCard from './packageCard';
import Message from './message';
import './packageList.css'

class PackageList extends Component {
  componentDidMount() {
    if(!this.props.token.token || (this.props.packages.length === 0 && this.props.token.packages.length > 0)) {
      const tokenToLoad = this.props.match.url.slice(1);
      this.props.loadToken(tokenToLoad);
    }
  }

  renderPackages() {
    if(this.props.packages.length > 0) {
      return this.props.packages.map((pack, i) => {
        return <PackageCard pack={pack} key={pack.number} />;
      });
    } else if(this.props.token.packages && this.props.token.packages.length === 0) {
      return <h2 className="main-header">Aktualnie nie śledzisz żadnych przesyłek</h2>
    } else {
      return <h2 className="main-header">Wczytywanie...</h2>
    }
  }

  render() {
    return(
      <div style={{marginTop: "20px"}}>
        { this.props.error && <Message error={this.props.error} /> }
        {this.renderPackages()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { packages: state.packages, token: state.token, error: state.message.error };
}

export default connect(mapStateToProps, actions)(PackageList);