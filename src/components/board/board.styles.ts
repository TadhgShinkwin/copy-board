import styled from "styled-components";

export const BoardContainer = styled.div`


  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Placeholder = styled.h1`
  position: absolute;
  top: 50%;  
  color: #64748b;
  font-weight: 500;
  text-transform: capitalize;
`;