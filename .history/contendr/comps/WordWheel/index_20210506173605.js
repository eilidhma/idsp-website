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
  position:relative;
  left:50%;
  top:50%;
`;


const WordWheel = ({
  src="wordwheel.svg"
}) => {
  return <Cont>
    <Img src={src}></Img>
  </Cont>
}

export default WordWheel;