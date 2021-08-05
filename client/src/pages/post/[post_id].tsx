import Head from "next/head";
import { END } from "redux-saga";
import Layout from "../../components/Layout/MainLayout";
import wrapper from "../../config/configureStore";
import { GET_POST_REQUEST } from "../../modules/post/actions";

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

export const getServerSideProps = wrapper.getServerSideProps(
  (store): any =>
    async ({ params }) => {
      store.dispatch({
        type: GET_POST_REQUEST,
        payload: params.post_id,
      });

      store.dispatch(END);
      await store.sagaTask.toPromise();
    },
);

export default ViewPostPage;
