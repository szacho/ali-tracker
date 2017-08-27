import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class PackageCard extends Component {

  renderEvents(ev) {
    return ev.map((event, i) => {
      const importantCodes = ["P_A", "P_PA", "P_D", "P_OWU", "P_PZL"];
      console.log(event.code);
      return(
        <li className={`package-events--event l-flex-between ${importantCodes.includes(event.code) ? 'is-important' : ''}`} key={i}>
          <span>{ event.eventName } w <span className="package-events--event-place l-bold">{ event.place ? event.place : '[brak danych]' }</span></span> <span className="package-events--event-date">{ event.time }</span>
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
        <div className="l-flex-between">
          <span className="package-card--number">{ this.props.pack.number }</span>
          <button className="close-btn l-flex" title="Usuń" onClick={this.handleRemoveButtonClick.bind(this)}></button>
        </div>
        <span className="package-card--name">{ this.props.pack.name }</span>
        <ul className="package-events">
          {this.renderEvents(this.props.pack.events)}
        </ul>
      </div>
    );
  }
};


export default connect(null, actions)(PackageCard);
