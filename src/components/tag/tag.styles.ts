import styled, {css} from "styled-components";

type TagProps = {
    $isSelected?: boolean;
}

const selectedStyle = css`
    background: #e3eefa;
    border: 1px solid #3783d6;
`;

const defaultStyle = css`
    border: 1px solid #dfe5eb;
`;

export const TagOuter = styled.div<TagProps>`
    ${(props) => (props.$isSelected ? selectedStyle : defaultStyle)}    

    border-radius: 8px;
    display: flex;
    flex-direction: row;
    gap: 5px;
    height: fit-content;
    padding: 0 10px;
    font-size: 0.8em;
    font-weight: 500;
    color:#424e5a;
    cursor: pointer;

    &:hover {
        background: #424e5a;
        color: #dfe5eb;
    }

    &:active {
        background: #f8fafc;
        color: #0284c7;
        border: 1px solid #0284c7;
    }
`;

export const IconContainer = styled.div`
    font-size: 1.5em;
    display: flex;
    align-items: center;
`;

export const TagTitle = styled.p`
    padding: 3px;
`;
