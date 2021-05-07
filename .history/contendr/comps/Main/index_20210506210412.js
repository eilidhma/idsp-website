import React, { useState } from 'react';
import styled from 'styled-components';

const Cont = styled.div`
color: white;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background:${props=>props.background}
`;




const Main = ({
  background='linear-gradient(180deg, #FF85DD 0%, #FFA4E5 100%)',
  children=null
}) => {
  return <Cont background={background}>
    {children}
  </Cont>
}

export default Main;



// .main {
//   color: white;
//   width: 100vw;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background:${props=>props.background}
// }