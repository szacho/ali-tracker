import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Redirect } from 'react-router-dom';

class TokenBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tokenInputValue: '',
      navigateTo: false
    }
  }

  componentDidMount() {
    if(this.props.token) {
      this.setState({ tokenInputValue: this.props.token });
    }
  }

  handleTokenInputChange(e) {
    this.setState({ tokenInputValue: e.target.value.trim() }, () => {
      this.props.loadToken(this.state.tokenInputValue);
    });
  }

  handleTokenInputFocus(e) {
    e.target.select();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.token !== this.props.token) {
      this.setState({ navigateTo: nextProps.token, tokenInputValue: nextProps.token });
    }
    if(!nextProps.token) this.setState({ tokenInputValue: '' });
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.token !== this.props.token) {
      this.setState({ navigateTo: false });
    }
  }

  render() {
    return (
      <div className="token-bar">
        { this.state.navigateTo && <Redirect to={this.state.navigateTo}/> }
        <input className="token-bar_input" onFocus={this.handleTokenInputFocus.bind(this)} onChange={this.handleTokenInputChange.bind(this)} value={this.state.tokenInputValue} type="text" placeholder="twój kod"  />
      </div>
    );
  }
}

export default connect(state => ({token: state.token.token || state.token.tokenShort}), actions)(TokenBar);
