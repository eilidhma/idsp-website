import React from 'react';
import styled from 'styled-components';

const WordWheel = ({
  src="wordwheel.svg"
}) => {
  return <Cont>
    <Img src={src}></Img>
    <Arrow src="arrow.svg"></Arrow>
  </Cont>
}

export default WordWheel;