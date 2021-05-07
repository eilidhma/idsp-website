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
  z-index:1;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  background-color:white;
  border-radius:50%;
  position:relative;
  left:${props=>props.left}px;
`;


const Switch = ({
  backgroundColor="#5177FF",
  onClick=()=>{},
  left=2
}) => {
  return <Cont backgroundColor={backgroundColor} onClick={onClick}>
    <Circle left={left}></Circle>
  </Cont>
}

export default Switch;



// .main {
//   color: white;
//   width: 100vw;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background: linear-gradient(180deg, #FF85DD 0%, #FFA4E5 100%);
// }