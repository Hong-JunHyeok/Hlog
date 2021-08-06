import { END } from "@redux-saga/core";
import Head from "next/head";
import React, { useEffect } from "react";
import { ButtonComponent } from "../components/Common/Button";
import { StyledHomeLayout } from "../components/Home/HomeLayout/styles";
import { StyledWelcome } from "../components/Home/Welcome/styles";
import Layout from "../components/Layout/MainLayout";
import wrapper from "../config/configureStore";
import { useUserDispatch } from "../hooks/dispatches/useUserDispatch";
import { useUserState } from "../hooks/states/useUserState";
import { useLink } from "../hooks/useLink";
import { LOAD_MY_INFO_REQUEST } from "../modules/user/actions";

const MainPage = () => {
  const { dispatchLoadMyInfo } = useUserDispatch();
  const { loginDone } = useUserState();
  const { handlePushLink } = useLink("/post");

  useEffect(() => {
    if (loginDone) {
      handlePushLink();
    }
  }, [loginDone]);

  return (
    <Layout>
      <Head>
        <title>HLOG | 메인</title>
      </Head>
      <StyledHomeLayout>
        <StyledWelcome>
          Welcome, <span className="special">HLOG</span>
          <p>
            HLOG는 소프트웨어 정보 공유 플렛폼입니다. 누구나, 언제든지,
            어디에서든 정보를 공유해보세요!
          </p>
        </StyledWelcome>
        <ButtonComponent handleFunc={handlePushLink}>시작하기</ButtonComponent>
      </StyledHomeLayout>
    </Layout>
  );
};

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store): any =>
//     async () => {
//       store.dispatch({
//         type: LOAD_MY_INFO_REQUEST,
//       });

//       store.dispatch(END);
//       await store.sagaTask.toPromise();
//     },
// );

export default MainPage;
