import { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyle from "styles/GlobalStyle";

const MyApp = ({ Component }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="개발을 공유하다." />
        <title>HLOG</title>
      </Head>
      <body>
        <GlobalStyle />
        <Component />
      </body>
    </>
  );
};

export default MyApp;
