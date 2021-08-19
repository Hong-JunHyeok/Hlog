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
    (author: string, post_id: string, createdAt: string, content: string) => {
      dispatch({
        type: CREATE_COMMENT_REQUEST,
        payload: {
          author,
          post_id,
          content,
          createdAt,
          comment_id: uuidv4(),
        },
      });
    },
    [dispatch],
  );

  return { getCommentsDispatch, createCommentDispatch };
};
