import { END } from "@redux-saga/core";
import { NextPage } from "next";
import { useEffect } from "react";
import CreatePageLayout from "../../components/Layout/CreatePostLayout";
import wrapper from "../../config/configureStore";
import { useUserState } from "../../hooks/states/useUserState";
import { useLink } from "../../hooks/useLink";
import { LOAD_MY_INFO_REQUEST } from "../../modules/user/actions";
import ssrCookiePender from "../../utils/ssrCookiePender";

const PostCreatePage: NextPage = () => {
  const { loginDone } = useUserState();
  const { handlePushLink } = useLink("/post");

  useEffect(() => {
    if (!loginDone) {
      handlePushLink();
    }
  }, [loginDone]);

  return <CreatePageLayout />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      ssrCookiePender(req);

      store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
      });

      store.dispatch(END);
      await store.sagaTask.toPromise();
    },
);

export default PostCreatePage;
