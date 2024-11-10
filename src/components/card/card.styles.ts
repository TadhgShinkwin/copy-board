import styled from "styled-components";

export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  opacity: 0;
  border: solid 2px transparent;
  transition: opacity 0.3s ease;
  color: #797d7a;
  cursor: pointer;
  margin-bottom: 5px;
`;

export const TextEdit = styled.textarea`
  max-width: 90%;
  border: solid 1px black;
  border-radius: 5px;
  padding: 5px;
`;

export const CardContainer = styled.div`
  width: 100px;
  background: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  color: black;
  padding: 10px;
  &:hover {
    ${IconContainer} {
      opacity: 1;
    }
  }
`;

export const CardText = styled.div`
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
`;
