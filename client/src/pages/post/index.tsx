import Head from "next/head";
import List from "../../components/Common/List";
import Layout from "../../components/Layout/MainLayout";
import PostItem from "../../components/Post/PostItem";
import PostPageLayout from "../../components/Layout/PostPageLayout";
import { generateFakePosts } from "../../data/fakePosts";
import { Post } from "../../types/Post";

const ViewPostsPage = () => {
  return (
    <Layout>
      <Head>
        <title>HLOG | 포스트</title>
      </Head>
      <PostPageLayout>
        <List
          items={generateFakePosts(30)}
          renderItems={(post: Post) => <PostItem {...post} key={post.id} />}
          className="post-conainer"
        />
      </PostPageLayout>
    </Layout>
  );
};

export default ViewPostsPage;
