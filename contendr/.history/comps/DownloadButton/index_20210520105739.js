import React, { useState } from 'react';
import styled from 'styled-components';

const Cont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  object-fit:cover;
  width: 200px;
  height: 50px;
  border-radius: 50px;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: 0.5s ease;
  z-index: 100;

  box-shadow: 4px 4px 10px white;
  transition: 0.5s ease;
  cursor: pointer;
  &:hover{
    box-shadow: none;
    
  }
 

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


export const DownloadButton = ({
  backgroundColor,
  darkstate,
  back
}) => {
  const [hover, setHover] = useState(false);
  return <Cont
  onMouseEnter={() => setHover(!hover)}
  onMouseLeave={() => setHover(!hover)}
  style={{
    color: hover ? backgroundColor : 'white',
background : darkstate ? "linear-gradient(180deg, #FF85DD 0%, #FFA4E5 100%)" : "linear-gradient(180deg, #5177FF 0%, #55C2FF 100%)"
  }}
  >
    visit the app!
  </Cont>
}

