import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import c from '../style-utils/colors';

class Message extends Component {
  render() {
    return(
      <MessageContainer display={this.props.error}>{this.props.error}</MessageContainer>
    );
  }
}

function mapStateToProps(state) {
  return { error: state.message.error };
}

export default connect(mapStateToProps)(Message);

const MessageContainer = styled.div`
  display: ${props => props.display ? 'block' : 'none'};
  width: 590px;
  padding: 12px;
  background: #f2dede;
  color: #a94442;
  margin-top: 21px;
  border: 1px solid #ebccd1;
  border-radius: 3px;
  font-size: 1.05rem;
`;
