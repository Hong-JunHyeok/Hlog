import React, { useEffect } from "react";
import { AppProps } from "next/app";
import Script from "next/script";
import GlobalStyle from "../styles/GlobalStyle";
import Layout from "../components/Layout";
import { chkValidPlatform } from "../utils/chkValidPlatform";

const AppComponent = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap"
        rel="stylesheet"
      />

      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default AppComponent;
