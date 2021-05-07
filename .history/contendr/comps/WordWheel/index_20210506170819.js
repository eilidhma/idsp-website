import React from 'react';
import styled from 'styled-components';

const LoadingCont = styled.div`
  display:flex;
  flex-direction:column;
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
    
    <Img src="wordwheel.svg"></Img>
  
}

export default WordWheel;