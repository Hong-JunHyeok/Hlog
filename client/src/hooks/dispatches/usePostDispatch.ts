import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { createPostAction, getPostsAction } from "../../modules/post/actions";

export const usePostDispatch = () => {
  const dispatch = useDispatch();

  const dispatchGetPosts = useCallback(() => {
    dispatch(getPostsAction.request());
  }, []);

  const dispatchCreatePost = useCallback((createPostData: ICreatePostData) => {
    dispatch(createPostAction.request());
  }, []);

  return {
    dispatchGetPosts,
  };
};
