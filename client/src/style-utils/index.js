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
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0.75);
  &:hover::before, &:hover::after{
    background: ${ c.hoverRed };
  }
  &:hover {
    cursor: pointer;
  }
  &::after, &::before {
    content: '';
    display: block;
    height: 21.21px;
    width: 2.5px;
    position: relative;
    background: #d0d1d5;
    border-radius: 2px;
  }
  &::before {
    transform: rotate(45deg);
    left: 1.25px;
  }
  &::after {
    transform: rotate(-45deg);
    left: -1.25px;
  }
`;

export const FlatInput = styled.input`
  border: 1px solid ${props => props.error ? c.error : '#ddd' };
  border-radius: 3px;
  margin: 0;
  padding: 3px 8px;
  height: 20px;
  font-size: 1.0rem;
`;

export const MainHeader = styled.h2`
  font-size: 1.65rem;
  display: flex;
  align-items: center;
  color: #556;

  &::before {
    content: '';
    display: inline-block;
    width: 4px;
    margin-right: 6px;
    height: 32px;
    background: ${ c.mainRed };
    border-radius: 2px;
  }
`
