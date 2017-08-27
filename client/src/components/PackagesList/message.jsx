import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeMessage } from '../../actions';

class Message extends Component {
  render() {
    return(
      <div className="message">
        <span>{this.props.error}</span>
        <button className="close-btn is-message l-flex" title="Zamknij" onClick={this.props.removeMessage.bind(this)}></button>
      </div>
    );
  }
}

export default connect(null, { removeMessage })(Message);
