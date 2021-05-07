import React, { useState } from 'react';
import styled from 'styled-components';

const Cont = styled.div`
  width: 50px;
  height: 25px;
  background-color:${props=>props.backgroundColor};
  display:flex;
  justify-content:flex-start;
  align-items:center;
  border-radius:25px;
  padding-left:3px;
  padding-right:3px;
  
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  background-color:${props=>props.foregroundColor};
  border-radius:50%;
  border:1px solid black;
  z-index:2;
`;


const Switch = ({
  justifyContent="flex-start",
  backgroundColor="#5177FF",
  foregroundColor="#FF85DD",
  onClick=()=>{}
}) => {
  return <Cont justifyContent={justifyContent} backgroundColor={backgroundColor} onClick={onClick}>
    <Circle backgroundColor={foregroundColor}></Circle>
  </Cont>
}

export default Switch;