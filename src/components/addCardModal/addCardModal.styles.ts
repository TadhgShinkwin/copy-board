import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

export const InputModal = styled.div`
  width: 450px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  padding: 2rem;
  font-family: system-ui, -apple-system, sans-serif;
  background-color: #f8fafc;
  display: grid;
  gap: 0.8rem;
  margin: 0 auto;
`;

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
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

export const InputButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

export const InputField = styled.input`
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  resize: vertical;
  font-family: inherit;
  margin: 1rem;
    
  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  }
`;


export const InputHeader = styled.div`
  padding: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const InputTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
`;

export const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;

export const TagContainer = styled.div`
  padding: 10px;
  border-radius: 8px;
  margin: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
`;
