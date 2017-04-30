import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'

import PackageCard from './packageCard';
import Message from '../message';

class PackageList extends Component {
  componentDidMount() {
    if(!this.props.token.token || (this.props.packages.length === 0 && this.props.token.packages.length > 0)) {
      const tokenToLoad = this.props.match.url.slice(1);
      this.props.loadToken(tokenToLoad);
      console.log('test2');
    }
  }

  renderPackages() {
    if(this.props.packages.length > 0) {
      return this.props.packages.map((pack, i) => {
        return <PackageCard pack={pack} key={pack.number} />;
      });
    } else {
      return <span>Brak zapisanych przesyłek</span>
    }
  }

  render() {
    return(
      <div style={{marginTop: "20px"}}>
        <Message />
        {this.renderPackages()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { packages: state.packages, token: state.token };
}

export default connect(mapStateToProps, actions)(PackageList);
