import React from "react";
import { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import Layout from "../components/Layout";

const AppComponent = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css"
      />
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default AppComponent;
