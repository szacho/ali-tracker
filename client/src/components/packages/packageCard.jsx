import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import styled from 'styled-components';
import c from '../../style-utils/colors';
import {RemoveButton} from '../../style-utils/';

class PackageCard extends Component {
  renderEvents(ev) {
    return ev.map((event, i) => {
      return(
        <Event key={i}>
          <span>{ event.eventName } w <EventPlace>{ event.place ? event.place : '[brak danych]' }</EventPlace></span> <EventDate>{ event.time }</EventDate>
        </Event>
      );
    });
  }

  handleRemoveButtonClick() {
    const { token, number } = this.props.pack
    this.props.removePackageFromToken(token, number);
  }

  render() {
    return(
      <Card>
        <NumberAndRemoveWrapper>
          <PNumber>{ this.props.pack.number }</PNumber>
          <RemoveButton onClick={this.handleRemoveButtonClick.bind(this)}></RemoveButton>
        </NumberAndRemoveWrapper>
        <Name>{ this.props.pack.name }</Name>
        <Events>
          {this.renderEvents(this.props.pack.events)}
        </Events>
      </Card>
    );
  }
};


export default connect(null, actions)(PackageCard);



const NumberAndRemoveWrapper = styled.div`
  display: flex;
  justify-content: space-between;

`;

const Card = styled.div`
  box-sizing: border-box;
  background: ${ c.background.first };
  width: 100%;
  border: 1px solid;
  border-color: #e5e6e9 #dfe0e4 #d0d1d5;
  border-radius: 3px;
  margin-top: 20px
  display: flex;
  flex-direction: column;
  padding:12px;
`;

const PNumber = styled.span`
  font-size: 0.8rem;
  padding-bottom: 2px;
  color: ${ c.hoverRed };
  text-transform: uppercase;
  font-weight: bold;
`;

const Name = styled.span`
  border-bottom: 1px solid #e9ebee;
  padding-bottom: 4px;
  font-size: 1.2rem;
`;

const Events = styled.ul`
  margin-top: 8px;
`;

const Event = styled.li`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
`;

const EventPlace = styled.span`
  font-weight: bold;
`;

const EventDate = styled.span`

`;
