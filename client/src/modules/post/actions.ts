import { createAsyncAction } from "typesafe-actions";
import { AxiosError, AxiosResponse } from "axios";

export const GET_POST_REQUEST = "post/GET_POST_REQUEST" as const;
export const GET_POST_SUCCESS = "post/GET_POST_SUCCESS" as const;
export const GET_POST_FAILURE = "post/GET_POST_FAILURE" as const;

export const GET_POSTS_REQUEST = "post/GET_POSTS_REQUEST" as const;
export const GET_POSTS_SUCCESS = "post/GET_POSTS_SUCCESS" as const;
export const GET_POSTS_FAILURE = "post/GET_POSTS_FAILURE" as const;

export const GET_USER_POSTS_REQUEST = "post/GET_USER_POSTS_REQUEST" as const;
export const GET_USER_POSTS_SUCCESS = "post/GET_USER_POSTS_SUCCESS" as const;
export const GET_USER_POSTS_FAILURE = "post/GET_USER_POSTS_FAILURE" as const;

export const CREATE_POST_REQUEST = "post/CREATE_POST_REQUEST" as const;
export const CREATE_POST_SUCCESS = "post/CREATE_POST_SUCCESS" as const;
export const CREATE_POST_FAILURE = "post/CREATE_POST_FAILURE" as const;

export const EDIT_POST_REQUEST = "post/EDIT_POST_REQUEST" as const;
export const EDIT_POST_SUCCESS = "post/EDIT_POST_SUCCESS" as const;
export const EDIT_POST_FAILURE = "post/EDIT_POST_FAILURE" as const;

export const DELETE_POST_REQUEST = "post/DELETE_POST_REQUEST" as const;
export const DELETE_POST_SUCCESS = "post/DELETE_POST_SUCCESS" as const;
export const DELETE_POST_FAILURE = "post/DELETE_POST_FAILURE" as const;

export const THUMNAIL_UPLOAD_REQUEST = "post/THUMNAIL_UPLOAD_REQUEST" as const;
export const THUMNAIL_UPLOAD_SUCCESS = "post/THUMNAIL_UPLOAD_SUCCESS" as const;
export const THUMNAIL_UPLOAD_FAILURE = "post/THUMNAIL_UPLOAD_FAILURE" as const;

export const getPostAction = createAsyncAction(
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
)<any, AxiosResponse<any>, string>();

export const deletePostAction = createAsyncAction(
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
)<any, AxiosResponse<any>, AxiosError<any>>();

export const editPostAction = createAsyncAction(
  EDIT_POST_REQUEST,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAILURE,
)<any, AxiosResponse<any>, AxiosError<any>>();

export const getUserPostsAction = createAsyncAction(
  GET_USER_POSTS_REQUEST,
  GET_USER_POSTS_SUCCESS,
  GET_USER_POSTS_FAILURE,
)<void, AxiosResponse, AxiosError<any>>();

export const getPostsAction = createAsyncAction(
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
)<void, AxiosResponse, AxiosError<any>>();

export const createPostAction = createAsyncAction(
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
)<any, any, any>();

export const thumnailUploadAction = createAsyncAction(
  THUMNAIL_UPLOAD_REQUEST,
  THUMNAIL_UPLOAD_SUCCESS,
  THUMNAIL_UPLOAD_FAILURE,
)<any, AxiosResponse, AxiosError<any>>();
