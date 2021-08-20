import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  CREATE_RECOMMENT_REQUEST,
  GET_RECOMMENTS_REQUEST,
} from "../../modules/recomment/actions";

interface CreateRecommentProps {
  author: string;
  comment_id: string;
  content: string;
}

export const useRecommentDispatch = () => {
  const dispatch = useDispatch();

  const createRecommentDispatch = useCallback(
    ({ author, comment_id, content }: CreateRecommentProps) => {
      dispatch({
        type: CREATE_RECOMMENT_REQUEST,
        payload: {
          author,
          comment_id,
          content,
        },
      });
    },
    [dispatch],
  );

  const getRecommentDispatch = useCallback(
    (comment_id: string) => {
      dispatch({
        type: GET_RECOMMENTS_REQUEST,
        payload: comment_id,
      });
    },
    [dispatch],
  );

  return { createRecommentDispatch, getRecommentDispatch };
};
