import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  padding:0rem 2rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: #034b0f;
  margin:1rem 0rem;
  padding: 0.3rem 1.5rem;
  color:#ffff;
  cursor: pointer;
  font-weight: bold;
  &:hover{
    background-color: #02b620;
  }
`;
