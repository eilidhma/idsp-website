import React from "react";
import styled from "styled-components";

const Cont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  position: absolute;
  font-family: "Poppins", sans-serif;
  font-size: 200px;
  z-index: 0;
  opacity: 50%;
  width: 120vw;
`;

const Img = styled.img`
  display: flex;
  animation: spin 7s linear infinite;
  width: 70%;
`;

const Arrow = styled.img`
  position: relative;
  animation: pulse 1.5s alternate-reverse infinite;
  right: 40%;
  width: 10%;
`;

export const PathTwo = ({
  scrollPosition,
  bottom = "150vh",
  left = "-20vw",
  text = "challenge your friends challenge your friends challenge your friends challenge your friends challenge your friends challenge your friends",
}) => {
  return (
    <Cont style={{ top: bottom, left: left }}>
      <svg
        width="200%"
        height="100%"
        viewBox="0 0 1920.32 593.81"
        fill="none"
        stroke="white"
        stroke-width="2"
        xmlns="http://www.w3.org/2000/svg"
        overflow="auto"
      >
        <path
          id="MyPath"
          d="M1920,264.11c-433.69-83.78-200.5,414.39-684.5,341.39-493-100-522-311.11-1235.5,41.94"
          stroke="none"
        />

        <text>
          <textPath href="#MyPath" startOffset={-scrollPosition}>
            {text}
          </textPath>
        </text>
      </svg>
    </Cont>
  );
};
