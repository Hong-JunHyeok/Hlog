import { AppProps } from "next/app";
import Head from "next/head";
import wrapper from "store";
import GlobalStyle from "styles/GlobalStyle";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>HLOG</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
};

export default wrapper.withRedux(MyApp);
