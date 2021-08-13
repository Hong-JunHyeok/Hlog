import { END } from "@redux-saga/core";
import Head from "next/head";
import React, { useEffect } from "react";
import List from "../../components/Common/List";
import Layout from "../../components/Layout/MainLayout";
import ProfileLayout from "../../components/Layout/ProfileLayout";
import PostItem from "../../components/Post/PostItem";
import ProfileEditForm from "../../components/Profile/ProfileEditForm";
import wrapper from "../../config/configureStore";
import { usePostState } from "../../hooks/states/usePostState";
import { useUserState } from "../../hooks/states/useUserState";
import { useLink } from "../../hooks/useLink";
import useModal from "../../hooks/useModal";
import { GET_MY_POSTS_REQUEST } from "../../modules/post/actions";
import { LOAD_MY_INFO_REQUEST } from "../../modules/user/actions";
import { Post } from "../../types/Post";
import { getArrayLength } from "../../utils/getArrayLength";
import ssrCookiePender from "../../utils/ssrCookiePender";

//* 내 정보 조희하는 페이지

const ProfilePage = () => {
  const { me, loginDone } = useUserState();
  const { posts } = usePostState();
  const { handlePushLink } = useLink("/");
  const { ModalPortal, closeModal, openModal } = useModal({
    position: "center",
  });

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
      <ProfileLayout openModal={openModal}>
        <ModalPortal>
          <ProfileEditForm />
        </ModalPortal>
        {getArrayLength(posts) === 0 ? (
          <h1 className="no-posts">조회할 포스트가 없네요...</h1>
        ) : (
          <List
            items={posts}
            renderItems={(post: Post) => (
              <PostItem {...post} key={post.post_id} />
            )}
            className="my-post-conainer"
          />
        )}
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

      store.dispatch({
        type: GET_MY_POSTS_REQUEST,
      });

      store.dispatch(END);
      await store.sagaTask.toPromise();
    },
);

export default ProfilePage;
