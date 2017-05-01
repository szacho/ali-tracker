import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {RemoveButton} from '../style-utils/';
import { removeMessage } from '../actions';

class Message extends Component {
  render() {
    return(
      <MessageContainer>
        <span>{this.props.error}</span>
        <RedRemoveButton onClick={this.props.removeMessage.bind(this)}></RedRemoveButton>
      </MessageContainer>
    );
  }
}

export default connect(null, { removeMessage })(Message);

const MessageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 590px;
  padding: 12px;
  background: #f2dede;
  color: #a94442;
  margin-top: 21px;
  border: 1px solid #ebccd1;
  border-radius: 3px;
  font-size: 1.05rem;
`;

const RedRemoveButton = styled(RemoveButton)`
  transform: scale(0.7);
  &::before, &::after{
    top: -4px;
    background: #c96664;
  }
`
