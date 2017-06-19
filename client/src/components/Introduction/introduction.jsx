import React from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { MainHeader } from '../../style-utils/';

export default (props) => {
  if(props.token) {
    return <Redirect to={`/${props.token}`} />;
  } else {
    return(
      <Wrapper>
        <MainHeader>Śledzenie przesyłek</MainHeader>
        <FeaturesList>
          <Feature>aplikacja pakuje wszystkie numery przesyłek do jednego</Feature>
          <Feature>po dodaniu pierwszej przesyłki zostaje przypisany unikalny kod</Feature>
          <Feature>za jego pomocą można wczytać dane na dowolnym urządzeniu</Feature>
          <Feature>wystarczy wkleić powyżej lub bezpośrednio do adresu URL</Feature>
        </FeaturesList>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin-top: 20px;
`;

const FeaturesList = styled.ul`
  margin: 10px 0 0 40px;
  list-style-type: disc;
`;

const Feature = styled.li`
  font-size: 1.1rem;
  line-height: 150%;
`;
