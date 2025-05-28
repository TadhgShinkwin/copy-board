import styled, { keyframes } from "styled-components";

export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  opacity: 0;
  border: solid 2px transparent;
  transition: opacity 0.3s ease;
  color: #797d7a;
  cursor: pointer;
`;
// Last line above only when not using fa-icons

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
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
  justify-content: space-between;
  background: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border-radius: 0.75rem;
  color: black;
  padding: 1.75rem;
  border: 1px solid #e2e8f0;
  transition: all 0.3s;
  cursor: copy;
  min-height: 140px;
  &:hover {
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    border: 1px solid transparent;
    border-image: radial-gradient(circle at top left, #8A2BE2 0%, #FF1493 50%, #00CED1 100%);
    border-image-slice: 1;
    border-radius: 10px;
    ${IconContainer} {
      opacity: 1;
    }
  }
`;

export const CardText = styled.div`
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

export const CardTitle = styled.h3`
  color: #1e293b;
  font-weight: 600;
  font-size: 1.1rem;
`;

export const CardHeader = styled.div`
  display: flex;
  margin: -15px -10px 10px 0;
  justify-content: space-between;
`;

interface NotificationProps {
  x: number;
  y: number;
  duration: number;
}

const fadeOut = keyframes`
  0% { 
    opacity: 1; 
    transform: translate(-50%, -100%) scale(1); 
  }
  70% { 
    opacity: 1; 
    transform: translate(-50%, -100%) scale(1); 
  }
  100% { 
    opacity: 0; 
    transform: translate(-50%, -100%) scale(0.9); 
  }
`;

export const CopyConfirm = styled.div<NotificationProps>`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: #1e293b;
  color: white;
  font-size: 14px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  transform: translate(-50%, -100%);
  margin-top: -8px;
  animation: ${fadeOut} ${props => props.duration}ms ease-in-out;
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5em;
  color: #14709b;
  font-size: 1.2em;
`;
