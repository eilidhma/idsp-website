import React from 'react';
import styled from 'styled-components';

const LoadingCont = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

const Spinner = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:20px;
  background-clip: padding-box;
  width:300px;
  height:300px;
  border:5px solid rgba(54,122,23,0.2);
  border-top:5px solid rgba(54,122,23,1);
  border-right:5px solid rgba(54,122,23,1);
  border-radius: 50%;
  animation: spin 2s linear infinite;
`;

const LoadingImg = styled.img`
  display:flex;
  object-fit:contain;
  width:255px;
  height:300px;
  position:relative;
  bottom: 320px;
`;


const WordWheel = ({}) => {
  return 
    
    <LoadingImg src="wordwheel.svg"></LoadingImg>
  </LoadingCont>
}

export default WordWheel;