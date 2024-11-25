import styled from "styled-components";

export const SearchContainer = styled.div`
    position: relative;
    width: 400px;
`;

export const SearchIcon = styled.span`
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: #64748b;
    font-size: 1rem;
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 2.5rem;
    border: 1px solid #e2e8f0;
    border-radius: 0.5rem;
    background: white;
    font-size: 0.95rem;
    

    &:focus {
        outline: none;
        border-color: #0ea5e9;
        box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
    }
`;
