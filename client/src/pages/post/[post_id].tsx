import Head from "next/head";
import Layout from "../../components/Layout/MainLayout";

const ViewPostPage = () => {
  return (
    <>
      <Head>
        <title>HLOG | 포스트 제목</title>
      </Head>
      <Layout>여긴 포스트 자세히보기 페이지</Layout>
    </>
  );
};

export default ViewPostPage;
