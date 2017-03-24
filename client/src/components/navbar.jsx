import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../style-utils';
import c from '../style-utils/colors';

import listImg from '../images/list.png';
import chartImg from '../images/bar-chart.png';
import infoImg from '../images/rounded-info-button.png';
import gearImg from '../images/settings-work-tool.png';


class Navbar extends Component {
  render() {
    return(
      <AppBar>
        <NavContainer>
          <header>
            <h1>AliTracker</h1>
          </header>
          <NavLinks>
            <li>
              <NavLink activeClassName="active" exact to={`/${this.props.token}`}>
                <img src={listImg} alt="dodaj paczkę"/>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" exact to="/statystyki">
                <img src={chartImg} alt=""/>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" exact to="/opcje">
                <img src={gearImg} alt=""/>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" exact to="/info">
                <img src={infoImg} alt=""/>
              </NavLink>
            </li>
          </NavLinks>
        </NavContainer>
      </AppBar>
    );
  }
}

export default Navbar;

const AppBar = styled.nav`
  background: ${c.mainRed};
  height: 43px;
  width: 100%;
  font-size: 1.8rem;
  color: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  z-index: 101;
  position: relative;
`;

const NavContainer = styled(Container)`
  align-items: center;
  justify-content: space-between;
`;

const NavLinks = styled.ul`
  display: flex;
  li {
    height: 43px;
    width: calc(43px*1.17);
    a {
      transition: 0.2s ease-out all;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover { background: ${c.hoverRed} }
      &.active { background: ${c.hoverRed} }
    }
    img {
      height: 43.2%;
      width: auto;
    }
  }
`;
