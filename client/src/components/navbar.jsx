import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from '../style-utils';
import c from '../style-utils/colors';

import bookmarkImg from '../images/add-bookmarks.png';
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
              <a href="">
                <img src={bookmarkImg} alt="dodaj paczkę"/>
              </a>
            </li>
            <li>
              <a href="">
                <img src={chartImg} alt=""/>
              </a>
            </li>
            <li>
              <a href="">
                <img src={gearImg} alt=""/>
              </a>
            </li>
            <li>
              <a href="">
                <img src={infoImg} alt=""/>
              </a>
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
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const NavContainer = styled(Container)`
  align-items: center;
  justify-content: space-between;
`;

const NavLinks = styled.ul`
  display: flex;
  li {
    transition: 0.2s ease-out all;
    height: 43px;
    width: calc(43px*1.21);
    &:hover { background: ${c.hoverRed} }
    a {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      height: 51.2%;
    }
  }
`;
