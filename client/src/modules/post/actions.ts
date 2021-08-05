import { createAsyncAction } from "typesafe-actions";
import { AxiosError, AxiosResponse } from "axios";

export const GET_POST_REQUEST = "post/GET_POST_REQUEST" as const;
export const GET_POST_SUCCESS = "post/GET_POST_SUCCESS" as const;
export const GET_POST_FAILURE = "post/GET_POST_FAILURE" as const;

export const GET_POSTS_REQUEST = "post/GET_POSTS_REQUEST" as const;
export const GET_POSTS_SUCCESS = "post/GET_POSTS_SUCCESS" as const;
export const GET_POSTS_FAILURE = "post/GET_POSTS_FAILURE" as const;

export const getPostAction = createAsyncAction(
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
)<any, AxiosResponse, AxiosError<any>>();

export const getPostsAction = createAsyncAction(
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
)<void, AxiosResponse, AxiosError<any>>();
