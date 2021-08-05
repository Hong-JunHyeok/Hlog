import { END } from "redux-saga";
import Head from "next/head";
import List from "../../components/Common/List";
import Layout from "../../components/Layout/MainLayout";
import PostItem from "../../components/Post/PostItem";
import PostsPageLayout from "../../components/Layout/PostsPageLayout";
import { Post } from "../../types/Post";
import wrapper from "../../config/configureStore";
import { GET_POSTS_REQUEST } from "../../modules/post/actions";
import { NextPage } from "next";
import { usePostState } from "../../hooks/states/usePostState";
import { getArrayLength } from "../../utils/getArrayLength";

const ViewPostsPage: NextPage = () => {
  const { posts } = usePostState();

  return (
    <Layout>
      <Head>
        <title>HLOG | 포스트</title>
      </Head>
      <PostsPageLayout>
        {getArrayLength(posts) === 0 ? (
          <h1 className="no-posts">조회할 포스트가 없네요...</h1>
        ) : (
          <List
            items={posts}
            renderItems={(post: Post) => (
              <PostItem {...post} key={post.post_id} />
            )}
            className="post-conainer"
          />
        )}
      </PostsPageLayout>
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store): any =>
    async () => {
      store.dispatch({
        type: GET_POSTS_REQUEST,
      });

      store.dispatch(END);
      await store.sagaTask.toPromise();
    },
);

export default ViewPostsPage;
