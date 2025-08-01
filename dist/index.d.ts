import React$1, { JSX, ReactNode } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

interface PropsInterface$5 {
    disabled?: boolean;
    children?: React.ReactNode;
    variant?: "primary" | "secondary" | "outlined";
    action?: () => void;
}

declare const Button: (props: PropsInterface$5) => JSX.Element;

interface PropsInterface$4 {
    disabled?: boolean;
    variant?: "primary" | "secondary";
    placeholder?: string;
    value?: string;
    type?: string;
    onChange?: (e: React$1.ChangeEvent<HTMLInputElement>) => void;
}

declare const Input: (props: PropsInterface$4) => JSX.Element;

interface AccordionData {
    title: string;
    content: string | React.ReactNode;
}
interface PropsInterface$3 {
    items: AccordionData[];
    allowMultipleOpen?: boolean;
}
declare const Accordion: (props: PropsInterface$3) => JSX.Element;

interface DropdownOption {
    label: string;
    value: string;
    action?: () => void;
}
interface PropsInterface$2 {
    options: DropdownOption[];
    variant?: "light" | "dark";
    children: ReactNode;
}
declare const Dropdown: (props: PropsInterface$2) => JSX.Element;

interface PropsInterface$1 {
    children: React.ReactNode;
    variant?: "light" | "dark";
    title: string;
    triggerText: string;
}
declare const Dialog: (props: PropsInterface$1) => react_jsx_runtime.JSX.Element;

interface PropsInterface {
    children: ReactNode;
    variant?: "light" | "dark";
    defaultActiveTab?: number;
}
interface TabProps {
    title: string;
    children: ReactNode;
}
declare const Tab: ({ children }: TabProps) => react_jsx_runtime.JSX.Element;
declare const Tabs: ({ children, variant, defaultActiveTab }: PropsInterface) => JSX.Element;

export { Accordion, Button, Dialog, Dropdown, Input, Tab, Tabs };
