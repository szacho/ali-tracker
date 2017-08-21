import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class PackageCard extends Component {
  renderEvents(ev) {
    return ev.map((event, i) => {
      return(
        <li className="package-card_event" key={i}>
          <span>{ event.eventName } w <span className="package-card_event-place">{ event.place ? event.place : '[brak danych]' }</span></span> <span className="package-card_event-date">{ event.time }</span>
        </li>
      );
    });
  }

  handleRemoveButtonClick() {
    const { token, number } = this.props.pack
    this.props.removePackageFromToken(token, number);
  }

  render() {
    return(
      <div className="package-card">
        <div className="package-card_number-wrapper">
          <span className="package-card_number">{ this.props.pack.number }</span>
          <button className="remove-btn" title="Usuń" onClick={this.handleRemoveButtonClick.bind(this)}></button>
        </div>
        <span className="package-card_name">{ this.props.pack.name }</span>
        <ul className="package-card_events">
          {this.renderEvents(this.props.pack.events)}
        </ul>
      </div>
    );
  }
};


export default connect(null, actions)(PackageCard);
