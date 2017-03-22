import React, { Component } from 'react'; //DO IT STATELESS

class Introduction extends Component {
  render() {
    return(
      <div>Introduction token: { this.props.token }</div>
    );
  }
}

export default Introduction;
