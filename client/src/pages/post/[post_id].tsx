import lexer from "marked";
import { NextPage } from "next";
import Head from "next/head";
import { END } from "redux-saga";
import CommentList from "../../components/Comment/CommentList";
import Layout from "../../components/Layout/MainLayout";
import ViewPostLayout from "../../components/Layout/ViewPostLayout";
import DeleteModal from "../../components/Post/DeleteModal";
import wrapper from "../../config/configureStore";
import { usePostState } from "../../hooks/states/usePostState";
import { useUserState } from "../../hooks/states/useUserState";
import { useLink } from "../../hooks/useLink";
import useModal from "../../hooks/useModal";
import { GET_POST_REQUEST } from "../../modules/post/actions";
import { LOAD_MY_INFO_REQUEST } from "../../modules/user/actions";
import getDistanceToNow from "../../utils/getDistanceToNow";
import ssrCookiePender from "../../utils/ssrCookiePender";

const ViewPostPage: NextPage = () => {
  const { me } = useUserState();
  const { post } = usePostState();

  const { handlePushLink } = useLink(`/profile/${post?.userId}`);

  const createMarkup = (content: string) => {
    return { __html: lexer(content) };
  };

  const {
    ModalPortal: DeleteModalPortal,
    openModal: openDeleteModal,
    closeModal: closeDeleteModal,
  } = useModal({ position: "center" });

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
              {me?.user_id === post.userId && (
                <ul className="options">
                  {/* <li>수정</li> */}
                  <li onClick={openDeleteModal}>삭제</li>
                </ul>
              )}
            </div>
          </header>
          <main className="post-main">
            {post.thumnail && (
              <img
                src={`http://localhost:8080/${post.thumnail}`}
                className="thumnail"
              />
            )}

            <div dangerouslySetInnerHTML={createMarkup(post.content)} />
            <CommentList
              commentsData={[
                {
                  author: "홍준혁",
                  content: "별로다...",
                  comment_id: "123123123",
                  createdAt: "2021년 3월 2일",
                },
                {
                  author: "류수아",
                  content: "ㅎㅎ",
                  comment_id: "1223123123",
                  createdAt: "2022년 3월 2일",
                },
              ]}
            />
          </main>
        </ViewPostLayout>
      </Layout>
      <DeleteModalPortal>
        <DeleteModal
          post_id={post.post_id}
          closeDeleteModal={closeDeleteModal}
        />
      </DeleteModalPortal>
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
