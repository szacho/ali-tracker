import React, { Component } from 'react';
import { connect } from 'react-redux';

import PackageCard from './packageCard';

class PackageList extends Component {
  renderPackages() {
    if(this.props.packages.length > 0) {
      return this.props.packages.map(pack => {
        return <PackageCard pack={pack} key={pack.number} />;
      });
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
  return { packages: state.packages };
}

export default connect(mapStateToProps)(PackageList);
