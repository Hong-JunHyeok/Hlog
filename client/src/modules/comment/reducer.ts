import produce from "immer";
import { createReducer } from "typesafe-actions";
import { ICommentState, CommentAction } from "./types";
import * as commentActions from "./actions";

export const commentInitialState: ICommentState = {
  getCommentsLoading: false,
  getCommentsDone: false,
  getCommentsError: null,

  comments: [],
};

export default createReducer<ICommentState, CommentAction>(
  commentInitialState,
  {
    [commentActions.GET_COMMENTS_REQUEST]: (state) =>
      produce(state, (draft) => {
        draft.getCommentsDone = false;
        draft.getCommentsError = null;
        draft.getCommentsLoading = true;
      }),
    [commentActions.GET_COMMENTS_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.getCommentsDone = true;
        draft.getCommentsLoading = false;

        draft.comments = action.payload.data.comments;
      }),
    [commentActions.GET_COMMENTS_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.getCommentsError = action.payload;
        draft.getCommentsLoading = false;
      }),
  },
);
