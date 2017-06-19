import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../actions';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import c from '../../style-utils/colors';

import logoutImg from '../../images/logout.png';

class SignOut extends Component {
  handleSignOutClick() {
    this.props.signOut();
  }

  render() {
    if(this.props.token) {
      return(
        <li>
          <SignOutButton title="Wyloguj" onClick={this.handleSignOutClick.bind(this)}>
            <img src={logoutImg} alt="wyloguj"/>
          </SignOutButton>
        </li>
      );
    } else {
      return <Redirect to='/' />;
    }
  }
}

export default connect(state => ({ token: state.token.token || state.token.tokenShort }), { signOut })(SignOut);

const SignOutButton = styled.button`
  transition: 0.2s ease-out all;
  height: 43px;
  width: calc(43px*1.17);
  border: none;
  padding: 0;
  background: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover { background: ${c.hoverRed}; cursor: pointer; }
  img {
    width: 43.2% !important;
    height: 50.2% !important;
  }
`;
