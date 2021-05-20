import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  object-fit:cover;
width: 10vw;
  position: absolute;
  right: -2.5vw;
  bottom: 5vh;
  min-width: 100px;

`;

const Img = styled.img`
  display:flex;
  animation: spin 7s linear infinite;
  width:70%;
  
`;

const Arrow = styled.img`
  position:relative;
  animation: pulse 1.5s alternate-reverse infinite;
  right:40%;
  width:10%;
  
`;


const WordWheel = ({
  src="wordwheel.svg"
}) => {
  return (
  <Cont>
    <Img src={src}></Img>
    <Arrow src="arrow.svg"></Arrow>
  </Cont>
  )
}

export default WordWheel;