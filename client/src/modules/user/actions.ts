import { createAction, createAsyncAction } from "typesafe-actions";
import { AxiosError, AxiosResponse } from "axios";

export const LOG_IN_REQUEST = "user/LOG_IN_REQUEST" as const;
export const LOG_IN_SUCCESS = "user/LOG_IN_SUCCESS" as const;
export const LOG_IN_FAILURE = "user/LOG_IN_FAILURE" as const;

export const LOAD_MY_INFO_REQUEST = "user/LOAD_MY_INFO_REQUEST" as const;
export const LOAD_MY_INFO_SUCCESS = "user/LOAD_MY_INFO_SUCCESS" as const;
export const LOAD_MY_INFO_FAILURE = "user/LOAD_MY_INFO_FAILURE" as const;

export const JOIN_REQUEST = "user/JOIN_REQUEST" as const;
export const JOIN_SUCCESS = "user/JOIN_SUCCESS" as const;
export const JOIN_FAILURE = "user/JOIN_FAILURE" as const;

export const LOGOUT_REQUEST = "user/LOGOUT_REQUEST" as const;
export const LOGOUT_SUCCESS = "user/LOGOUT_SUCCESS" as const;
export const LOGOUT_FAILURE = "user/LOGOUT_FAILURE" as const;

export const loginAsyncAction = createAsyncAction(
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
)<any, AxiosResponse, AxiosError<any>>();

export const joinAsyncAction = createAsyncAction(
  JOIN_REQUEST,
  JOIN_SUCCESS,
  JOIN_FAILURE,
)<any, AxiosResponse, AxiosError<any>>();

export const logoutAsyncAction = createAsyncAction(
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
)<void, AxiosResponse, AxiosError<any>>();

export const loadMyInfoAction = createAsyncAction(
  LOAD_MY_INFO_REQUEST,
  LOAD_MY_INFO_SUCCESS,
  LOAD_MY_INFO_FAILURE,
)<void, AxiosResponse, AxiosError<any>>();
