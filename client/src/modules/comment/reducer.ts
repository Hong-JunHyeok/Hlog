import produce from "immer";
import { createReducer } from "typesafe-actions";
import { ICommentState, CommentAction } from "./types";
import * as commentActions from "./actions";
import { Comment } from "../../types/Comment";

export const commentInitialState: ICommentState = {
  getCommentsLoading: false,
  getCommentsDone: false,
  getCommentsError: null,

  createCommentLoading: false,
  createCommentDone: false,
  createCommentError: null,

  deleteCommentLoading: false,
  deleteCommentDone: false,
  deleteCommentError: null,

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
      }),
    [commentActions.CREATE_COMMENT_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.createCommentError = action.payload;
        draft.createCommentLoading = false;
      }),
    [commentActions.DELETE_COMMENT_REQUEST]: (state) =>
      produce(state, (draft) => {
        draft.deleteCommentDone = false;
        draft.deleteCommentError = null;
        draft.deleteCommentLoading = true;
      }),
    [commentActions.DELETE_COMMENT_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.deleteCommentDone = true;
        draft.deleteCommentLoading = false;

        draft.comments = draft.comments.filter(
          (comment: Comment) => comment.comment_id !== action.payload,
        );
      }),
    [commentActions.DELETE_COMMENT_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.deleteCommentError = action.payload;
        draft.deleteCommentLoading = false;
      }),
  },
);
