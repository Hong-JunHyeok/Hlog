import { AxiosError, AxiosResponse } from "axios";
import { createAsyncAction } from "typesafe-actions";

export const GET_COMMENTS_REQUEST = "comment/GET_COMMENTS_REQUEST";
export const GET_COMMENTS_SUCCESS = "comment/GET_COMMENTS_SUCCESS";
export const GET_COMMENTS_FAILURE = "comment/GET_COMMENTS_FAILURE";

export const CREATE_COMMENT_REQUEST = "comment/CREATE_COMMENT_REQUEST";
export const CREATE_COMMENT_SUCCESS = "comment/CREATE_COMMENT_SUCCESS";
export const CREATE_COMMENT_FAILURE = "comment/CREATE_COMMENT_FAILURE";

export const DELETE_COMMENT_REQUEST = "comment/DELETE_COMMENT_REQUEST";
export const DELETE_COMMENT_SUCCESS = "comment/DELETE_COMMENT_SUCCESS";
export const DELETE_COMMENT_FAILURE = "comment/DELETE_COMMENT_FAILURE";

export const getCommentsActions = createAsyncAction(
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE,
)<any, AxiosResponse<any>, AxiosError>();

export const createCommentActions = createAsyncAction(
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
)<any, any, AxiosError>();

export const deleteCommentActions = createAsyncAction(
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
)<any, any, AxiosError>();
