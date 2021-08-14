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
import {
  GET_MY_POSTS_REQUEST,
  GET_USER_POSTS_REQUEST,
} from "../../modules/post/actions";
import {
  LOAD_MY_INFO_REQUEST,
  LOAD_USER_INFO_REQUEST,
} from "../../modules/user/actions";
import { Post } from "../../types/Post";
import { getArrayLength } from "../../utils/getArrayLength";
import ssrCookiePender from "../../utils/ssrCookiePender";

//* 내 정보 조희하는 페이지

const UserProfilePage = () => {
  const { me, loginDone, userInfo } = useUserState();
  const { posts } = usePostState();
  const { handlePushLink } = useLink("/post");

  // useEffect(() => {
  //   if (!loginDone || !me) {
  //     handlePushLink();
  //   }
  // }, [loginDone, me]);

  return (
    <Layout>
      <Head>
        <title>HLOG | 프로필</title>
      </Head>
      <ProfileLayout>
        {getArrayLength(posts) === 0 ? (
          <h1 className="no-posts">조회할 포스트가 없네요...</h1>
        ) : (
          <List
            items={posts}
            renderItems={(post: Post) => (
              <PostItem {...post} key={post.post_id} />
            )}
            className="user-post-conainer"
          />
        )}
      </ProfileLayout>
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }) => {
      ssrCookiePender(req);
      const userIdx = params.userIdx;

      store.dispatch({
        type: LOAD_USER_INFO_REQUEST,
        payload: userIdx,
      });

      store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
      });

      store.dispatch({
        type: GET_USER_POSTS_REQUEST,
        payload: userIdx,
      });

      store.dispatch(END);
      await store.sagaTask.toPromise();
    },
);

export default UserProfilePage;
