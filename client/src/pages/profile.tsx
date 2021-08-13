import { END } from "@redux-saga/core";
import Head from "next/head";
import React, { useEffect } from "react";
import Layout from "../components/Layout/MainLayout";
import ProfileLayout from "../components/Layout/ProfileLayout";
import ProfileEditForm from "../components/Profile/ProfileEditForm";
import wrapper from "../config/configureStore";
import { useUserState } from "../hooks/states/useUserState";
import { useLink } from "../hooks/useLink";
import { LOAD_MY_INFO_REQUEST } from "../modules/user/actions";
import ssrCookiePender from "../utils/ssrCookiePender";

const ProfilePage = () => {
  const { me, loginDone } = useUserState();
  const { handlePushLink } = useLink("/");

  useEffect(() => {
    if (!loginDone || !me) {
      handlePushLink();
    }
  }, [loginDone, me]);

  if (!me) {
    return null;
  }

  return (
    <Layout>
      <Head>
        <title>HLOG | 내 프로필</title>
      </Head>
      <ProfileLayout>
        <ProfileEditForm />
      </ProfileLayout>
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      ssrCookiePender(req);

      store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
      });

      // store.dispatch({
      //   type: GET_MY_POSTS_REQUEST,
      // });

      store.dispatch(END);
      await store.sagaTask.toPromise();
    },
);

export default ProfilePage;
