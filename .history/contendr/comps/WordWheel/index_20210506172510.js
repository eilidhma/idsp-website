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
  animation: spin 0.5s linear infinite;
`;


const WordWheel = ({
  src="wordwheel.svg"
}) => {
  return <Cont>
    <Img src={src}></Img>
  </Cont>
}

export default WordWheel;