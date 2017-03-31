import styled from 'styled-components';
import c from './colors';

export const Container = styled.div`
  width: 1000px;
  height: 100%;
  margin: 0 auto;
  display: flex;
`;

export const RemoveButton = styled.button`
  border:none;
  padding:0;
  background: transparent;
  width: 15px;
  height: 15px;
  transform: scale(0.8);
  &:hover::before, &:hover::after{
    background: ${ c.hoverRed };
  }
  &:hover {
    cursor: pointer;
  }
  &::after {
    content: '';
    display: block;
    height: 18px;
    width: 2.5px;
    transform: rotate(45deg);
    position: relative;
    top: -20.5px;
    left: 6px;
    background: #d0d1d5;
    border-radius: 2px;
  }
  &::before {
    content: '';
    display: block;
    height: 18px;
    width: 2.5px;
    transform: rotate(-45deg);
    position: relative;
    top: -2.5px;
    left: 6px;
    border-radius: 2px;
    background: #d0d1d5;
  }
`;
