import styled from "styled-components";

export const AppBody = styled.div`
    margin: 0;
    padding: 2rem;
    font-family: system-ui, -apple-system, sans-serif;
    background-color: #f8fafc;
`;

export const HeadingsContainer = styled.div`
    margin-bottom: 2rem;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0;
    background-image: linear-gradient(45deg,  #2BA2E2 0%, #FF1493 50%, #00CED1 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
`;

export const Subtitle = styled.p`
    color: #64748b;
    font-size: 1.1rem;
    margin-top: 0.5rem;
`;

export const ControlsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
`;

export const ControlsSpacer = styled.div`
    flex: 1;
`;

export const AddButton = styled.button`
    padding: 0.75rem 1.5rem;
    background: #0ea5e9;
    color: white;
    border: none;
    border-radius: 0.5rem;  
    font-weight: 700;
    white-space: nowrap;
    transition: background-color 0.2s;
    cursor: pointer;

    &:hover {
        background: #0284c7;
    }

    &:active {
        background: #f8fafc;
        color: #0284c7;
        border: 1px solid #0284c7;
    }
`;
