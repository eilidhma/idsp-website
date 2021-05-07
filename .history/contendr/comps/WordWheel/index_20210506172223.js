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
  object-fit:contain;
  width:100%
  height:300px;
  position:absolute;
  animation: spin 2s linear infinite;
`;


const WordWheel = ({
  src="wordwheel.svg"
}) => {
  return <Cont>
    <Img src={src}></Img>
  </Cont>
}

export default WordWheel;