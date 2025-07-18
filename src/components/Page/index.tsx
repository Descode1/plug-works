import { Container } from "./styled";
import { pageProps } from "./types";
import React from "react";

const Page: React.FC<pageProps> = ({ title, children }) => {
  return (
    <div>
      <Container>
      <h1>{title}</h1>
      <div>{children}</div>
      </Container>
    </div>
  );
};

export default Page;
