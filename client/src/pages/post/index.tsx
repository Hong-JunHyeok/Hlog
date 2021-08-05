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
import { usePostState } from "../../hooks/dispatches/usePostDispatch";

const ViewPostsPage = () => {
  const { posts } = usePostState();

  return (
    <Layout>
      <Head>
        <title>HLOG | 포스트</title>
      </Head>
      <PostPageLayout>
        <List
          items={posts}
          renderItems={(post: Post) => <PostItem {...post} key={post.id} />}
          className="post-conainer"
        />
      </PostPageLayout>
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch({
      type: GET_POSTS_REQUEST,
    });

    store.dispatch(END);
    await store.sagaTask.toPromise();
  },
);

export default ViewPostsPage;
