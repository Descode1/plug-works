import React$1, { JSX } from 'react';

interface PropsInterface$2 {
    disabled?: boolean;
    children?: React.ReactNode;
    variant?: "primary" | "secondary" | "outlined";
    action?: () => void;
}

declare const Button: (props: PropsInterface$2) => JSX.Element;

interface PropsInterface$1 {
    disabled?: boolean;
    variant?: "primary" | "secondary";
    placeholder?: string;
    value?: string;
    type?: string;
    onChange?: (e: React$1.ChangeEvent<HTMLInputElement>) => void;
}

declare const Input: (props: PropsInterface$1) => JSX.Element;

interface AccordionData {
    title: string;
    content: string | React.ReactNode;
}
interface PropsInterface {
    items: AccordionData[];
    allowMultipleOpen?: boolean;
}
declare const Accordion: (props: PropsInterface) => JSX.Element;

export { Accordion, Button, Input };
