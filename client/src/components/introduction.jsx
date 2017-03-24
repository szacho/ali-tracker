import React, { Component } from 'react'; //DO IT STATELESS
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Introduction extends Component {
  render() {
    if(this.props.token.token) {
      return <Redirect to={`/${this.props.token.token}`} />;
    } else {
      return(
        <div>Introduction:</div>
      );
    }
  }
}

function mapStateToProps(state) {
  return { token: state.token };
}

export default connect(mapStateToProps)(Introduction);
