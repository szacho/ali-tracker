import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import TokenBar from './tokenBar';
import SignOut from './signout';

import listImg from '../../images/list.png';
import infoImg from '../../images/rounded-info-button.png';


class Navbar extends Component {
  render() {
    return(
      <header className="app-bar">
        <div className="nav-container">
          <Link to='/'>
            <h1>AliTracker</h1>
          </Link>
          <TokenBar />
          <nav>
            <ul className="nav-links">
              <li className="nav-links_item">
                <NavLink className="nav-links_link" title="Twoje przesyłki" activeClassName="nav-links_link--active" exact to={`/${this.props.token ? this.props.token : ''}`}>
                <img className="nav-links_img" src={listImg} alt="lista przesyłek"/>
                </NavLink>
              </li>
              <li className="nav-links_item">
                <NavLink className="nav-links_link" title="Informacje" activeClassName="nav-links_link--active" exact to="/info">
                <img className="nav-links_img" src={infoImg} alt="info"/>
                </NavLink>
              </li>
              <SignOut />
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Navbar;
