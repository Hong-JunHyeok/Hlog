import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { GET_COMMENTS_REQUEST } from "../../modules/comment/actions";

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

  return { getCommentsDispatch };
};
