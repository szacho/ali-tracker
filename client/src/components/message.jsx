import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import c from '../style-utils/colors';
import {RemoveButton} from '../style-utils/';
import { removeMessage } from '../actions';

class Message extends Component {
  render() {
    return(
      <MessageContainer display={this.props.error}>
        <span>{this.props.error}</span>
        <RedRemoveButton onClick={this.props.removeMessage.bind(this)}></RedRemoveButton>
      </MessageContainer>
    );
  }
}

function mapStateToProps(state) {
  return { error: state.message.error };
}

export default connect(mapStateToProps, { removeMessage })(Message);

const MessageContainer = styled.div`
  display: ${props => props.display ? 'flex' : 'none'};
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
