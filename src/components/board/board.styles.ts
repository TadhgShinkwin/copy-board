import styled from "styled-components";

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;  
  justify-content: center;
`;

export const Placeholder = styled.h1`
  position: absolute;
  top: 50%;  
  color: #64748b;
  font-weight: 500;
  text-transform: capitalize;
`;