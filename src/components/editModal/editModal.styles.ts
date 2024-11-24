import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const EditModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

export const EditModalInput = styled.textarea`
  width: 100%;
  height: 100px;
  margin-bottom: 20px; 
  border-radius: 8px;
`;

export const EditModalButton = styled.button`

`;

export const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: center;
`;
