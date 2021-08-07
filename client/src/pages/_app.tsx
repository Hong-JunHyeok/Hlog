import React, { useEffect } from "react";
import { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import wrapper from "../config/configureStore";
import { useUserDispatch } from "../hooks/dispatches/useUserDispatch";

const AppComponent = ({ Component, pageProps }: AppProps) => {
  const { dispatchLoadMyInfo } = useUserDispatch();

  // useEffect(() => {
  //   dispatchLoadMyInfo();
  // }, []);

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

      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(AppComponent);
