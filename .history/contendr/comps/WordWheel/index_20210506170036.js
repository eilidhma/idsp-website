import React from 'react';
import styled from 'styled-components';

// const ImgCont = styled.div`
//   display:flex;
//   justify-content:center;
//   align-items:center;
//   flex-direction:column;
//   width:150px;
//   max-width:150px;
//   object-fit:cover;
  
// `;

// const Img = styled.img`
//   display:flex;
//   width:100%;
//   object-fit:cover;
// `;


const wordWheel = ({
  router = useRouter(),
  src="logo.png"
}) => {
  return <ImgCont>
    <Img src={src}/>
  </ImgCont>
}

export default Logo;