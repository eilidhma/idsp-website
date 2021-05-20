import React from 'react';
import styled from 'styled-components';
import {Router, useRouter} from 'next/router'

const ImgCont = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  flex-direction:row;
  width: 100%;
  border-radius:50%;
  object-fit:cover;
 




`;

const Img = styled.img`
  display:flex;
  width:100%;
  object-fit:cover;

  max-width:150px;

`;


const Bio = styled.div`
display:flex;
flex-direction:column;
margin: 0 0 0 2.5vw;




`

const Role = styled.div`
font-family: "Poppins", sans-serif;
font-size: 16px;
`

const Name = styled.div`
font-size: 24px;
font-family: "Poppins", sans-serif;
margin: 0 0 1vh 0;
`


export const Profile = ({
  router = useRouter(),
  src="/jojo.jpg",
  name="jojo",
  role="Developer"
}) => {
  return <ImgCont>
    <Img src={src}/>
  <Bio>
  <Name>{name}</Name>
  <Role>Role: {role}</Role>
  </Bio>
 
  </ImgCont>
}

