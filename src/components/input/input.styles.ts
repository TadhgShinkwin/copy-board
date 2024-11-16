import styled from "styled-components";

export const InputComponent = styled.form`
  textarea {
    width: 100%;
    min-height: 100px;
    padding: 12px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    resize: vertical;
    font-family: inherit;
    
    &:focus {
      outline: none;
      border-color: #4a90e2;
      box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
    }
  }

  button {
    padding: 8px 16px;
    border: none;
    border-radius: 6px;
    background: #4a90e2;
    color: white;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s ease;
    margin: 10px;

    &:hover {
      background: #357abd;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
    }
  }
`;

export const InputModal = styled.div`
  max-width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;


   margin: 0;
   padding: 2rem;
   font-family: system-ui, -apple-system, sans-serif;
   background-color: #f8fafc;
   display: grid;
   gap: 2rem;
   max-width: 500px;
   margin: 0 auto;

`;

export const InputHeader = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
`;

export const InputTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
`;

export const TitleAccent = styled.div`
  width: 8px;
  height: 8px;
  background: #0ea5e9;
  border-radius: 50%;
`;
