import styled, { css } from "styled-components";

interface StyledProps {
    variant: "primary" |"secondary"| "outlined";
    disabled?: boolean
}

export const StyledButton = styled.button<StyledProps>`
    padding: 10px 16px;
    border-radius: 6px;
    font-weight: 600;
    font-size: 14px;
    transition: background 0.2s ease-in-out;
    cursor: pointer;

    ${({variant}) => variant === "primary" && css`
        background-color: #000000ea;
        color: white;
        border: none;
        &:hover{
            background-color: #232935ff;
        }
    `}
    ${({variant}) => variant === "secondary" && css`
        background-color: #FFA500;
        color: white;
        border: none;
        &:hover{
            background-color: #ffb733;
        }
    `}
    ${({variant}) => variant === "outlined" && css`
        background-color: transparent;
        color: #3b82f6;
        border: 2px solid #3b82f6;
        &:hover {
            background-color: #e0f2fe;
        }
    `}
    ${({ disabled }) => disabled && css`
        opacity: 0.6;
        cursor: not-allowed;
    `}
`