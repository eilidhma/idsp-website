import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
  width: 50px;
  height: 25px;
  background-color:#5177FF;
  display:flex;
  justify-content:flex-start;
  align-items:centre;
`;

const Cont = styled.div`
  width: 20px;
  height: 20px;
`;


const Switch = ({
  src="wordwheel.svg"
}) => {
  return <Cont>
    <Circle></Circle>
  </Cont>
}

export default Switch;