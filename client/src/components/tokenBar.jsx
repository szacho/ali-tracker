import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { FlatInput } from '../style-utils';
import styled from 'styled-components';
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
      this.setState({ navigateTo: nextProps.token });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.token !== this.props.token) {
      this.setState({ navigateTo: false });
    }
  }

  render() {
    return (
      <TokenBarWrapper>
        { this.state.navigateTo && <Redirect push to={this.state.navigateTo}/> }
        <TokenInput onFocus={this.handleTokenInputFocus.bind(this)} onChange={this.handleTokenInputChange.bind(this)} value={this.state.tokenInputValue} type="text" placeholder="twój kod"  />
      </TokenBarWrapper>
    );
  }
}

export default connect(state => ({token: state.token.token || state.token.tokenShort}), actions)(TokenBar);

const TokenInput = styled(FlatInput)`
  height: 16px;
  width: 120px;
  letter-spacing: 1.2px;
  text-align: center
  text-transform: lowercase;
`;

const TokenBarWrapper = styled.div`
  display: flex;
  align-items: center;
`;
