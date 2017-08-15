import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeMessage } from '../../actions';

class Message extends Component {
  render() {
    return(
      <div className="message">
        <span>{this.props.error}</span>
        <button className="remove-btn remove-btn--red" title="Zamknij" onClick={this.props.removeMessage.bind(this)}></button>
      </div>
    );
  }
}

export default connect(null, { removeMessage })(Message);
