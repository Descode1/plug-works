import React$1, { JSX } from 'react';

interface PropsInterface$1 {
    disabled?: boolean;
    children?: React.ReactNode;
    variant?: "primary" | "secondary" | "outlined";
    action?: () => void;
}

declare const Button: (props: PropsInterface$1) => JSX.Element;

interface PropsInterface {
    disabled?: boolean;
    variant?: "primary" | "secondary";
    placeholder?: string;
    value?: string;
    type?: string;
    onChange?: (e: React$1.ChangeEvent<HTMLInputElement>) => void;
}

declare const Input: (props: PropsInterface) => JSX.Element;

export { Button, Input };
