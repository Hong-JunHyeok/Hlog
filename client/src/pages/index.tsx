import Head from "next/head";
import React from "react";
import { ButtonComponent } from "../components/Common/Button";
import { StyledHomeLayout } from "../components/Home/HomeLayout/styles";
import { StyledWelcome } from "../components/Home/Welcome/styles";
import Layout from "../components/Layout/MainLayout";
import { useLink } from "../hooks/useLink";

const MainPage = () => {
  const { handlePushLink } = useLink("/post");

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

export default MainPage;
