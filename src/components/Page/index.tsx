import { pageProps } from "./types.d";
import React from "react";


const Page: React.FC<pageProps> = ({title,children}) => {
  return (
    <div>
        <h1>{title}</h1>
        <div>{children}</div>
      
    </div>
  )
}

export default Page;
