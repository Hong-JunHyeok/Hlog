import { AppProps } from "next/app";
import Head from "next/head";
import wrapper from "store/configureStore";
import GlobalStyle from "styles/GlobalStyle";

const MyApp = ({ Component }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="개발을 공유하다." />
        <title>HLOG</title>
        <GlobalStyle />
      </Head>
      <body>
        <Component />
      </body>
    </>
  );
};

export default wrapper.withRedux(MyApp);
