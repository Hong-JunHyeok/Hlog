import Head from "next/head";
import { useEffect } from "react";
import { END } from "redux-saga";
import Layout from "../../components/Layout/MainLayout";
import ViewPostLayout from "../../components/Layout/ViewPostLayout";
import wrapper from "../../config/configureStore";
import { usePostState } from "../../hooks/states/usePostState";
import { GET_POST_REQUEST } from "../../modules/post/actions";
import { LOAD_MY_INFO_REQUEST } from "../../modules/user/actions";
import getDistanceToNow from "../../utils/getDistanceToNow";
import ssrCookiePender from "../../utils/ssrCookiePender";

const ViewPostPage = () => {
  const { post } = usePostState();

  return (
    <>
      <Head>
        <title>HLOG | 포스트 제목</title>
      </Head>
      <Layout>
        <ViewPostLayout>
          <header className="post-header">
            <h1>{post.title}</h1>
            <div className="meta">
              <span className="author">{post.author}</span>
              <span className="createdAt">
                {getDistanceToNow(post.createdAt)}
              </span>
            </div>
          </header>
          <div className="post-main">{post.content}</div>
        </ViewPostLayout>
      </Layout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params, req }) => {
      ssrCookiePender(req);

      store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
      });

      store.dispatch({
        type: GET_POST_REQUEST,
        payload: params.post_id,
      });

      store.dispatch(END);
      await store.sagaTask.toPromise();
    },
);

export default ViewPostPage;
