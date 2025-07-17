import React from 'react';

type pageProps = {
    title: string;
    children: React.ReactNode;
};

declare const Page: React.FC<pageProps>;

export { Page };
