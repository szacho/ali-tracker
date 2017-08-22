import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import TokenBar from './tokenBar';
import SignOut from './signout';

import listImg from '../../images/list.png';
import infoImg from '../../images/rounded-info-button.png';
import plusImg from '../../images/plus.png';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { isFormVisible: window.innerWidth > 960 ? true : false }
  }
  componentDidMount() {
    window.addEventListener('resize', (e) => {
      const aside = document.querySelector(".aside");
      if(window.innerWidth > 960 && !this.state.isFormVisible) {
        aside.style.display = "block";
        this.setState({ isFormVisible: true });
      } else if(!aside.style.display && window.innerWidth <= 960) {
        this.setState({ isFormVisible: false });
      }
    });
  }

  togglePackageForm() {
    const aside = document.querySelector(".aside");
    this.state.isFormVisible && window.innerWidth <= 960 ? aside.style.display = 'none' : aside.style.display = 'block';
    this.setState({ isFormVisible: !this.state.isFormVisible });
  }

  render() {
    const isFormActive = this.state.isFormVisible;
    return(
      <header className="app-bar">
        <div className="nav-container">
          <Link to='/'>
            <h1 className="app-logo">AliTracker</h1>
          </Link>
          <TokenBar />
          <nav>
            <ul className="nav-links">
              <li className="nav-links_item mobile-only-li">
                <button onClick={this.togglePackageForm.bind(this)} className={`nav-links_btn ${isFormActive ? 'nav-links_link--active' : ''}`} title="Dodaj przesyłkę">
                  <img src={plusImg} alt="dodaj przesyłkę"/>
                </button>
              </li>
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
