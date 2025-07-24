import React$1, { JSX } from 'react';

type pageProps = {
    title: string;
    children: React$1.ReactNode;
};

declare const Page: React$1.FC<pageProps>;

interface PropsInterface {
    disabled?: boolean;
    children?: React.ReactNode;
    variant?: "primary" | "outlined";
    action?: () => void;
}
declare const Button: (props: PropsInterface) => JSX.Element;

export { Button, Page };
