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
    font-size: 2vw;
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
width: 100%;
`;

const SubmitUI = styled.input`
background: transparent;

border: none;
overflow: auto;
outline: none;

-webkit-box-shadow: none;
-moz-box-shadow: none;
box-shadow: none;

resize: none; /*remove the resize handle on the bottom right*/

border: 1px solid white;
background: white;
width: 100%;
height: 50px;
`;



export const Form = ({
  src="wordwheel.svg"
}) => {
  return <FormUI>
      <LabelUI>name</LabelUI>
<InputUI/>
<LabelUI>email</LabelUI>
<InputUI/>
<LabelUI>message</LabelUI>
<TextUI/>

<SubmitUI type="submit"/>

  </FormUI>
}

