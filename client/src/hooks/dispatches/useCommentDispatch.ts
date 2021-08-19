import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  CREATE_COMMENT_REQUEST,
  DELETE_COMMENT_REQUEST,
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
    (author: string, content: string, post_id: string) => {
      console.log(author, content);
      dispatch({
        type: CREATE_COMMENT_REQUEST,
        payload: {
          author,
          post_id,
          content,
        },
      });
    },
    [dispatch],
  );

  const deleteCommentDispatch = useCallback(
    (comment_id: string) => {
      dispatch({
        type: DELETE_COMMENT_REQUEST,
        payload: comment_id,
      });
    },
    [dispatch],
  );

  return { getCommentsDispatch, createCommentDispatch, deleteCommentDispatch };
};
