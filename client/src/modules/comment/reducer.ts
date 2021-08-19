import produce from "immer";
import { createReducer } from "typesafe-actions";
import { ICommentState, CommentAction } from "./types";
import * as commentActions from "./actions";

export const commentInitialState: ICommentState = {
  getCommentsLoading: false,
  getCommentsDone: false,
  getCommentsError: null,

  createCommentLoading: false,
  createCommentDone: false,
  createCommentError: null,

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
    [commentActions.CREATE_COMMENT_REQUEST]: (state) =>
      produce(state, (draft) => {
        draft.createCommentDone = false;
        draft.createCommentError = null;
        draft.createCommentLoading = true;
      }),
    [commentActions.CREATE_COMMENT_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.createCommentDone = true;
        draft.createCommentLoading = false;

        draft.comments.unshift(action.payload);
      }),
    [commentActions.CREATE_COMMENT_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.createCommentError = action.payload;
        draft.createCommentLoading = false;
      }),
  },
);
