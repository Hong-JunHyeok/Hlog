import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { getPostsAction } from "../../modules/post/actions";

export const usePostDispatch = () => {
  const dispatch = useDispatch();

  const dispatchGetPosts = useCallback(() => {
    dispatch(getPostsAction.request());
  }, []);

  return {
    dispatchGetPosts,
  };
};
