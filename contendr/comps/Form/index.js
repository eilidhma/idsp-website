import React from 'react';
import styled from 'styled-components';

const FormUI = styled.form`
  display:flex;
  justify-content:flex-start;
  align-items:flex-start;
  object-fit:cover;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
 

`;

const LabelUI = styled.label`
    font-size: 24px;
`;

const InputUI = styled.input`
background: transparent;
border-bottom: 1px solid white;
border: none;
overflow: auto;
outline: none;

-webkit-box-shadow: none;
-moz-box-shadow: none;
box-shadow: none;

resize: none; /*remove the resize handle on the bottom right*/

border-bottom: 1px solid white;
color: white;
width: 100%;
margin: 50px 0;
font-size: 18px;
width: 100%;
font-family: "Poppins", sans-serif;
`;

const TextUI = styled.textarea`
background: transparent;

border: none;
overflow: auto;
outline: none;

-webkit-box-shadow: none;
-moz-box-shadow: none;
box-shadow: none;

resize: none; /*remove the resize handle on the bottom right*/

border-bottom: 1px solid white;
color: white;
font-size: 18px;
width: 100%;
font-family: "Poppins", sans-serif;

`;

const SubmitUI = styled.div`
background: transparent;
margin: 50px 0 0 0;
border: none;
overflow: auto;
outline: none;
border-radius: 10px;
-webkit-box-shadow: none;
-moz-box-shadow: none;
box-shadow: none;
display: flex;
justify-content: center;
align-items: center;

resize: none; /*remove the resize handle on the bottom right*/
box-shadow: 4px 4px 10px white;
width: 100%;
height: 100px;
font-size: 18px;
width: 100%;
font-family: "Poppins", sans-serif;
color: white;
transition: 0.5s ease;
cursor: pointer;
&:hover{
  box-shadow: none;
  
}
`;



export const Form = ({
  src="wordwheel.svg",
  darkstate
}) => {
  return <FormUI>
      <LabelUI>name</LabelUI>
<InputUI/>
<LabelUI>email</LabelUI>
<InputUI/>
<LabelUI>message</LabelUI>
<TextUI/>

<SubmitUI type="submit" style={{background: darkstate ? "linear-gradient(180deg, #FF85DD 0%, #FFA4E5 100%)" : "linear-gradient(180deg, #5177FF 0%, #55C2FF 100%)"}}>Send Us a Message</SubmitUI>

  </FormUI>
}

