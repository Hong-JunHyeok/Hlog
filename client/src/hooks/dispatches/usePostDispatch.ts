import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  createPostAction,
  getPostsAction,
  thumnailUploadAction,
} from "../../modules/post/actions";
import { ICreatePostData } from "../../utils/api/post/createPostAPI";

export const usePostDispatch = () => {
  const dispatch = useDispatch();

  const dispatchGetPosts = useCallback(() => {
    dispatch(getPostsAction.request());
  }, [dispatch]);

  const dispatchCreatePost = useCallback(
    (createPostData: ICreatePostData) => {
      dispatch(createPostAction.request(createPostData));
    },
    [dispatch],
  );

  const dispatchThumnailUpload = useCallback(
    (thumnailData: FormData) => {
      dispatch(thumnailUploadAction.request(thumnailData));
    },
    [dispatch],
  );

  return {
    dispatchCreatePost,
    dispatchGetPosts,
    dispatchThumnailUpload,
  };
};
