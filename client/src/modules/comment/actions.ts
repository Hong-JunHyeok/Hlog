import { AxiosError, AxiosResponse } from "axios";
import { createAsyncAction } from "typesafe-actions";

export const GET_COMMENTS_REQUEST = "comment/GET_COMMENTS_REQUEST" as const;
export const GET_COMMENTS_SUCCESS = "comment/GET_COMMENTS_SUCCESS" as const;
export const GET_COMMENTS_FAILURE = "comment/GET_COMMENTS_FAILURE" as const;

export const getCommentsActions = createAsyncAction(
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE,
)<any, AxiosResponse<any>, AxiosError>();
