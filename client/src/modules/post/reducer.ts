import produce from "immer";
import { createReducer } from "typesafe-actions";
import * as postActions from "./actions";
import { IPostState, PostAction } from "./types";

export const postInitialState: IPostState = {
  getPostDone: false,
  getPostError: "",
  getPostLoading: false,

  createPostDone: false,
  createPostError: "",
  createPostLoading: false,

  getPostsDone: false,
  getPostsError: null,
  getPostsLoading: false,

  getUserPostsDone: false,
  getUserPostsError: null,
  getUserPostsLoading: false,

  thumnailUploadDone: false,
  thumnailUploadError: null,
  thumnailUploadLoading: false,

  deletePostDone: false,
  deletePostError: null,
  deletePostLoading: false,

  editPostDone: false,
  editPostError: null,
  editPostLoading: false,

  thumnailURL: "",

  posts: [],
  post: null,
};

export default createReducer<IPostState, PostAction>(postInitialState, {
  [postActions.GET_USER_POSTS_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.getUserPostsDone = false;
      draft.getUserPostsError = null;
      draft.getUserPostsLoading = true;
    }),
  [postActions.GET_USER_POSTS_SUCCESS]: (state, action) =>
    produce(state, (draft) => {
      draft.getUserPostsDone = true;
      draft.getUserPostsLoading = false;

      draft.posts = action.payload.data.posts;
    }),
  [postActions.GET_USER_POSTS_FAILURE]: (state, action) =>
    produce(state, (draft) => {
      draft.getUserPostsError = action.payload;
      draft.getUserPostsLoading = false;
    }),
  [postActions.GET_POSTS_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.getPostsDone = false;
      draft.getPostsError = null;
      draft.getPostsLoading = true;
    }),
  [postActions.GET_POSTS_SUCCESS]: (state, action) =>
    produce(state, (draft) => {
      draft.getPostsDone = true;
      draft.getPostsLoading = false;

      draft.posts = action.payload.data.posts;
    }),
  [postActions.GET_POSTS_FAILURE]: (state, action) =>
    produce(state, (draft) => {
      draft.getPostsError = action.payload;
      draft.getPostsLoading = false;
    }),
  [postActions.GET_POST_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.getPostDone = false;
      draft.getPostError = null;
      draft.getPostLoading = true;
    }),
  [postActions.GET_POST_SUCCESS]: (state, action) =>
    produce(state, (draft) => {
      draft.getPostDone = true;
      draft.getPostLoading = false;

      draft.post = action.payload.data.post;
    }),
  [postActions.GET_POST_FAILURE]: (state, action) =>
    produce(state, (draft) => {
      draft.getPostError = "조회할 포스트가 없습니다.";
      draft.getPostLoading = false;
    }),
  [postActions.DELETE_POST_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.deletePostDone = false;
      draft.deletePostError = null;
      draft.deletePostLoading = true;
    }),
  [postActions.DELETE_POST_SUCCESS]: (state, action) =>
    produce(state, (draft) => {
      draft.deletePostDone = true;
      draft.deletePostLoading = false;
    }),
  [postActions.DELETE_POST_FAILURE]: (state, action) =>
    produce(state, (draft) => {
      draft.deletePostError = action.payload.response.data;
      draft.deletePostLoading = false;
    }),
  [postActions.EDIT_POST_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.deletePostDone = false;
      draft.deletePostError = null;
      draft.deletePostLoading = true;
    }),
  [postActions.EDIT_POST_SUCCESS]: (state, action) =>
    produce(state, (draft) => {
      draft.deletePostDone = true;
      draft.deletePostLoading = false;
    }),
  [postActions.EDIT_POST_FAILURE]: (state, action) =>
    produce(state, (draft) => {
      draft.deletePostError = action.payload.response.data;
      draft.deletePostLoading = false;
    }),
  [postActions.CREATE_POST_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.createPostDone = false;
      draft.createPostError = null;
      draft.createPostLoading = true;
    }),
  [postActions.CREATE_POST_SUCCESS]: (state, action) =>
    produce(state, (draft) => {
      draft.createPostDone = true;
      draft.createPostLoading = false;

      draft.post = action.payload.data.post;
    }),
  [postActions.CREATE_POST_FAILURE]: (state, action) =>
    produce(state, (draft) => {
      draft.createPostError = "에러가 발생했습니다.";
      draft.createPostLoading = false;
    }),
  [postActions.THUMNAIL_UPLOAD_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.thumnailUploadDone = false;
      draft.thumnailUploadError = null;
      draft.thumnailUploadLoading = true;

      draft.thumnailURL = "";
    }),
  [postActions.THUMNAIL_UPLOAD_SUCCESS]: (state, action) =>
    produce(state, (draft) => {
      draft.thumnailUploadDone = true;
      draft.thumnailUploadLoading = false;

      draft.thumnailURL = action.payload.data;
    }),
  [postActions.THUMNAIL_UPLOAD_FAILURE]: (state, action) =>
    produce(state, (draft) => {
      draft.thumnailUploadError = action.payload;
      draft.thumnailUploadLoading = false;
    }),
});
