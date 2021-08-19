import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  CREATE_COMMENT_REQUEST,
  GET_COMMENTS_REQUEST,
} from "../../modules/comment/actions";
import { v4 as uuidv4 } from "uuid";

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
    (author: string, post_id: string, content: string) => {
      const created_at = Date();
      dispatch({
        type: CREATE_COMMENT_REQUEST,
        payload: {
          author,
          post_id,
          content,
          created_at,
          comment_id: uuidv4(),
        },
      });
    },
    [dispatch],
  );

  return { getCommentsDispatch, createCommentDispatch };
};
