import React from 'react';
import styled from 'styled-components';
import {Router, useRouter} from 'next/router'

const ImgCont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  width:150px;
  max-width:200px;
  object-fit:cover;
  position:absolute;
  top:10vh;
  left:10vw;
`;

const Img = styled.img`
  display:flex;
  width:100%;
  object-fit:cover;
`;


const Logo = ({
  router = useRouter(),
  src="logo.png",
  onClick=()=>{router.push('/')},
}) => {
  return <ImgCont onClick={onClick}>
    <Img src={src}/>
  </ImgCont>
}

export default Logo;