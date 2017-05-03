import React from 'react';
import styled from 'styled-components';
import { MainHeader } from '../style-utils';

export default () => {
  return(
    <Wrapper>
      <MainHeader>Informacje</MainHeader>
      <Description>Aplikacja AliTracker służy do sprawnego zarządzania dostarczanymi przesyłkami. Nie wymaga rejestracji ani logowania - wystarczy dodać stronę do zakładek lub zapamiętać otrzymany kod.</Description>
      <TodoList>
        TODO:
        <TodoItem>responsywność</TodoItem>
        <TodoItem>obsługa wielu dostawców, kurierów</TodoItem>
        <TodoItem>statystyki skuteczności różnych kurierów i dostawców</TodoItem>
        <TodoItem>przypominanie o zbliżającym się deadline dla przesyłek z AliExpress</TodoItem>
      </TodoList>
      <Author>&copy;2017 Michał Szachniewicz (<GitLink href="https://github.com/szacho/ali-tracker">github</GitLink>)</Author>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 20px;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 150%;
  margin: 10px 0 0 20px;
`;

const Author = styled.span`
  font-size: 1rem;
  margin-left: 20px;
`;

const GitLink = styled.a`
  color: #E53935;
`;

const TodoList = styled.ul`
  list-style-type: georgian;
  font-weight: 700;
  margin: 20px 0 20px 20px;
  font-size: 1rem;
`;

const TodoItem = styled.li`
  font-weight: 400;
  margin-left: 25px;
  line-height: 140%;
  font-size: 1rem;
`;
