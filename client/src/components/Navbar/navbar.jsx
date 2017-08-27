import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import TokenBar from './tokenBar';
import SignOut from './signout';
import _ from 'lodash';

import listImg from '../../images/list.png';
import infoImg from '../../images/rounded-info-button.png';
import plusImg from '../../images/plus.png';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { isFormVisible: window.innerWidth > 960 ? true : false }
    this.handleResize = _.debounce(this.handleResize, 200);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }
  componentDidUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  handleResize(e) {
    const form = document.querySelector(".add-package");
    if(window.innerWidth > 960 && !this.state.isFormVisible) {
      form.style.display = "flex";
      this.setState({ isFormVisible: true });
    } else if(!form.style.display && window.innerWidth <= 960) {
      this.setState({ isFormVisible: false });
    }
  }

  togglePackageForm() {
    const form = document.querySelector(".add-package");
    this.state.isFormVisible && window.innerWidth <= 960 ? form.style.display = 'none' : form.style.display = 'flex';
    this.setState({ isFormVisible: !this.state.isFormVisible });
  }

  render() {
    const isFormActive = this.state.isFormVisible;
    return(
      <header id="navbar">
        <div className="nav l-flex-between">
          <Link to='/'>
            <span className="nav--logo">AliTracker</span>
          </Link>
          <TokenBar />
          <nav>
            <ul className="l-flex">
              <li className="nav--item l-mobile-item">
                <button onClick={this.togglePackageForm.bind(this)} className={`nav--btn ${isFormActive ? 'is-active' : ''}`} title="Dodaj przesyłkę">
                  <img className="nav--btn-img" src={plusImg} alt="dodaj przesyłkę"/>
                </button>
              </li>
              <li className="nav--item">
                <NavLink className="nav--link l-flex" title="Twoje przesyłki" activeClassName="is-active" exact to={`/${this.props.token ? this.props.token : ''}`}>
                <img className="nav--link-img" src={listImg} alt="lista przesyłek"/>
                </NavLink>
              </li>
              <li className="nav--item">
                <NavLink className="nav--link l-flex" title="Informacje" activeClassName="is-active" exact to="/info">
                <img className="nav--link-img" src={infoImg} alt="info"/>
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
