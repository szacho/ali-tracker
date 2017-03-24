import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'

import PackageCard from './packageCard';

class PackageList extends Component {
  componentWillMount() {
    if(!this.props.token.token || (this.props.packages.length === 0 && this.props.token.packages.length > 0)) {
      const tokenToLoad = this.props.match.url.slice(1);
      console.log(tokenToLoad);
      this.props.loadToken(tokenToLoad);
    }
  }

  renderPackages() {
    if(this.props.packages.length > 0) {
      return this.props.packages.map(pack => {
        return <PackageCard pack={pack} key={pack.number} />;
      });
    } else {
      return <span>Brak zapisanych przesyłek</span>
    }
  }

  render() {
    return(
      <div>
        {this.renderPackages()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { packages: state.packages, token: state.token };
}

export default connect(mapStateToProps, actions)(PackageList);
