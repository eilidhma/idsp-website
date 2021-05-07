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
`;

const Arrow = styled.img`
  position:absolute;
  left:50px;
  top:50%;
  width:5%;
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