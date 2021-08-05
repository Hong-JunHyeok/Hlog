import { useTypedSelector } from "../../modules";

export const usePostState = () => {
  const {
    getPostsDone,
    getPostLoading,
    getPostDone,
    getPostError,
    getPostsError,
    getPostsLoading,
    post,
    posts,
  } = useTypedSelector((state) => state.post);

  return {
    getPostsDone,
    getPostLoading,
    getPostDone,
    getPostError,
    getPostsError,
    getPostsLoading,
    post,
    posts,
  };
};
