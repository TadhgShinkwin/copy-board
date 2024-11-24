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
  position: relative;
  display: flex;
  flex-direction: column;
  width: 150px;
  background: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border-radius: 0.75rem;
  color: black;
  padding: 1.75rem;
  border: 1px solid #e2e8f0;
  transition: all 0.3s;
  cursor: pointer;
  min-height: 140px;
  &:hover {
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    border-color: #0ea5e9;
    ${IconContainer} {
      opacity: 1;
    }
  }
`;

export const CardText = styled.div`
  cursor: copy;
  color: #64748b;
  font-size: 0.95rem;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  line-height: 1.5;
`;
