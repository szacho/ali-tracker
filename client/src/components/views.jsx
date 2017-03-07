import React from 'react';
import styled from 'styled-components';
import PackageList from './packageList';

export function homepage() {
  return(
    <MainContent>
      <PackageList />
    </MainContent>
  );
}

export function statistics() {
  return(
    <MainContent>Statistics</MainContent>
  );
}

export function options() {
  return(
    <MainContent>Options</MainContent>
  );
}

export function info() {
  return(
    <MainContent>Info</MainContent>
  );
}

export function tokenpage(props) {
  return(
    <MainContent>token: {props.match.params.token}</MainContent>
  );
}

const MainContent = styled.main`
  width: 70%;
  height: 100%;
  background: #fff;
  padding: 20px;
`;
