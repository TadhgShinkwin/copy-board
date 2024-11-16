import styled from "styled-components";

export const InputComponent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background: white;
  border-radius: 14px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

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

    &:hover {
      background: #357abd;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
    }
  }
`;
