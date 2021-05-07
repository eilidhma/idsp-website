import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
  width: 50px;
  height: 25px;
  background-color:#5177FF;
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
  background-color:#FF85DD;
  border-radius:50%;
`;


const Switch = ({
  
}) => {
  const [dar]
  return <Cont onClick={()=>setDark(!dark)}>
    <Circle></Circle>
  </Cont>
}

export default Switch;