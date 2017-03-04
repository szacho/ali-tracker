import React from 'react';

export function homepage() {
  return(
    <div>homepage</div>
  );
}

export function statistics() {
  return(
    <div>Statistics</div>
  );
}

export function options() {
  return(
    <div>Options</div>
  );
}

export function info() {
  return(
    <div>Info</div>
  );
}

export function tokenpage(props) {
  return(
    <div>token: {props.match.params.token}</div>
  );
}
