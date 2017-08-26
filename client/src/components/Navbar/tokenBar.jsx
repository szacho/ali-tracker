import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Redirect } from 'react-router-dom';
import _ from 'lodash';

class TokenBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tokenInputValue: '',
      navigateTo: false
    };
    this.inputTokenLoad = _.debounce(this.inputTokenLoad, 400, {maxWait: 1500});
  }

  componentDidMount() {
    if(this.props.token) {
      this.setState({ tokenInputValue: this.props.token });
    }
  }

  inputTokenLoad(token) {
    this.props.loadToken(token);
  }

  handleTokenInputChange(e) {
    console.log('hello');
    this.setState({ tokenInputValue: e.target.value.trim().toLowerCase() }, () => {
      this.inputTokenLoad(this.state.tokenInputValue);
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
