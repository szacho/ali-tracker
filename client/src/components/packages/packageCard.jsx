import React from 'react';
import styled from 'styled-components';
import c from '../../style-utils/colors';

const PackageCard = (props) => {
  console.log(props.pack);
  return(
    <Card>
      <PNumber>{ props.pack.number }</PNumber>
      <Name>{ props.pack.name }</Name>
      <Events>
        {renderEvents(props.pack.events)}
      </Events>
    </Card>
  );
};

function renderEvents(ev) {
  return ev.map((event, i) => {
    return(
      <Event key={i}>
        <span>{ event.eventName } w <EventPlace>{ event.place ? event.place : '[brak danych]' }</EventPlace></span> <EventDate>{ event.time }</EventDate>
      </Event>
    );
  });
}

export default PackageCard;

const Card = styled.div`
  box-sizing: border-box;
  background: ${ c.background.first };
  width: 100%;
  border: 1px solid;
  border-color: #e5e6e9 #dfe0e4 #d0d1d5;
  border-radius: 3px;
  margin-bottom: 25px
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
