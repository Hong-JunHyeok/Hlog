import lexer from "marked";
import { NextPage } from "next";
import Head from "next/head";
import { END } from "redux-saga";
import Layout from "../../components/Layout/MainLayout";
import ViewPostLayout from "../../components/Layout/ViewPostLayout";
import wrapper from "../../config/configureStore";
import { usePostState } from "../../hooks/states/usePostState";
import { useLink } from "../../hooks/useLink";
import { GET_POST_REQUEST } from "../../modules/post/actions";
import { LOAD_MY_INFO_REQUEST } from "../../modules/user/actions";
import getDistanceToNow from "../../utils/getDistanceToNow";
import ssrCookiePender from "../../utils/ssrCookiePender";

const ViewPostPage: NextPage = () => {
  const { post } = usePostState();

  const { handlePushLink } = useLink(`/profile/${post?.userId}`);

  const createMarkup = (content: string) => {
    return { __html: lexer(content) };
  };

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
              <span className="author" onClick={handlePushLink}>
                {post.author}
              </span>
              <span className="createdAt">
                {getDistanceToNow(post.createdAt)}
              </span>
            </div>
          </header>
          <main className="post-main">
            <div dangerouslySetInnerHTML={createMarkup(post.content)} />
          </main>
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
