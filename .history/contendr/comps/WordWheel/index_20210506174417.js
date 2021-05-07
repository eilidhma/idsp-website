import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  object-fit:cover;
`;

const Img = styled.img`
  display:flex;
  animation: spin 7s linear infinite;
  z-index:2;
`;

const Arrow = styled.img`
  position:relative;
  animation: pulse 2s linear alternate;
  right:45%;
  width:10%;
  z-index:1;
`;


const WordWheel = ({
  src="wordwheel.svg"
}) => {
  return <Cont>
    <Img src={src}></Img>
    <Arrow src="arrow.svg"></Arrow>
  </Cont>
}

export default WordWheel;