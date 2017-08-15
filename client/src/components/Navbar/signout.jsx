import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../actions';
import { Redirect } from 'react-router-dom';

import logoutImg from '../../images/logout.png';

class SignOut extends Component {
  handleSignOutClick() {
    this.props.signOut();
  }

  render() {
    if(this.props.token) {
      return(
        <li className="nav-links_item">
          <button className="nav-links_sign-out" title="Wyloguj" onClick={this.handleSignOutClick.bind(this)}>
            <img src={logoutImg} alt="wyloguj"/>
          </button>
        </li>
      );
    } else {
      return <Redirect to='/' />;
    }
  }
}

export default connect(state => ({ token: state.token.token || state.token.tokenShort }), { signOut })(SignOut);
