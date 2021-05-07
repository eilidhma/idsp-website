import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`;

const Img = styled.img`
  display:flex;
  object-fit:contain;
  width:255px;
  height:300px;
  position:absolute;
  animation: spin 2s linear infinite;
`;


const WordWheel = ({}) => {
  return 
    <Cont />
    <Img src="wordwheel.svg"></Img>
  
}

export default WordWheel;