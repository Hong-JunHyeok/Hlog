import { END } from "redux-saga";
import Head from "next/head";
import List from "../../components/Common/List";
import Layout from "../../components/Layout/MainLayout";
import PostItem from "../../components/Post/PostItem";
import PostPageLayout from "../../components/Layout/PostPageLayout";
import { generateFakePosts } from "../../data/fakePosts";
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
      <PostPageLayout>
        {getArrayLength(posts) === 0 ? (
          <h1 className="no-posts">조회할 포스트가 없네요...</h1>
        ) : (
          <List
            items={posts}
            renderItems={(post: Post) => <PostItem {...post} key={post.id} />}
            className="post-conainer"
          />
        )}
      </PostPageLayout>
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
