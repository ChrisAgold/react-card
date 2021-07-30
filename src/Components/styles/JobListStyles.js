// eslint-disable-next-line no-unused-vars
import React from "react";
// css libary
import styled from "styled-components";

// JOBLISTMAIN
export const StyledJobListMain = styled.div`
  background-color: #008eff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const StyledJobListBody = styled.div`
background-color: #fffafa;
display:flex;
height: 100%;
flex-direction:column;
width: 50%;
overflow-y: scroll;
align-items:center;
padding; 5%;
-webkit-scrollbar {
  display: none;
}
-ms-overflow-style: none; 
scrollbar-width: none;

`;

export const StyledJobListHeader = styled.div`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 9%,
    rgba(0, 212, 255, 1) 100%
  );
  padding-top: 2%;
  padding-bottom: 2%;

  width: 50%;
  color: white;
  font-size: 30px;
  font-weight: bold;
`;

export const StyledJobListMainList = styled.div`
  margin-top: 5%;
  color: white;
  font-size: 20px;
`;

// CARDS //

export const StyledCardMain = styled.div`
  max-width: 400px;
  :hover{
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  }
  cursor:pointer;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  // margin: 15px;
  margin-bottom: 3%;
  background: #1154bf;
  justify-content: center;
`;

export const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1%;
`;
export const StyledCardBody = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2%;
`;

//rem, % of parents
export const StyledTextHeader = styled.div`
  color: white;
  font-weight: bold;
  font-size: 30px;
`;

export const StyledTextBody = styled.div`
  color: white;
  font-weight: bold;
`;

export const StyledButton = styled.button`
  display: inline-block;
   padding: 0.7em 1.7em;
   margin: 0 0.3em 0.3em 0;
   border-radius: 0.2em;
   box-sizing: border-box;
   text-decoration: none;
   font-family: "Roboto", sans-serif;
   font-weight: 400;
   color: #ffffff;
   background-color: #3369ff;
   box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
   text-align: center;
   position: relative;
  cursor: pointer;
  border-radius: 20px;
  margin-top: 1rem;
  float: right;
  
`;

export const StyledModal = styled.div`
  background-color: white;
  backdrop-filter: blur(6px);
  font-weight: bold;
`;
// JOBLISTCARD
/*
align-items: center;
  background-color: #afd275;
  box-shadow:
    12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  display: flex;
  height: 200px;
  justify-content: center;
  margin-right: 4rem;
*/

// .name {

// }
