import Head from "next/head";
import React, { useEffect } from "react";
import Layout from "../components/Layout/MainLayout";
import ProfileLayout from "../components/Layout/ProfileLayout";
import ProfileEditForm from "../components/Profile/ProfileEditForm";
import { useUserState } from "../hooks/states/useUserState";
import { useLink } from "../hooks/useLink";

const ProfilePage = () => {
  const { me, loginDone } = useUserState();
  const { handlePushLink } = useLink("/");

  useEffect(() => {
    if (!loginDone || !me) {
      handlePushLink();
    }
  }, [loginDone, me]);

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

export default ProfilePage;
