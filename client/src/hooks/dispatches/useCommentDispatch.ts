import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  CREATE_COMMENT_REQUEST,
  GET_COMMENTS_REQUEST,
} from "../../modules/comment/actions";

export const useCommentDispatch = () => {
  const dispatch = useDispatch();

  const getCommentsDispatch = useCallback(
    (post_id: string) => {
      dispatch({
        type: GET_COMMENTS_REQUEST,
        payload: post_id,
      });
    },
    [dispatch],
  );

  const createCommentDispatch = useCallback(
    (post_id: string, content: string) => {
      dispatch({
        type: CREATE_COMMENT_REQUEST,
        payload: {
          post_id,
          content,
        },
      });
    },
    [dispatch],
  );

  return { getCommentsDispatch, createCommentDispatch };
};
