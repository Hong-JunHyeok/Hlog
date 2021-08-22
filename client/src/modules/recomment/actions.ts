import { AxiosError, AxiosResponse } from "axios";
import { createAsyncAction } from "typesafe-actions";

export const CREATE_RECOMMENT_REQUEST =
  "recomment/CREATE_RECOMMENT_REQUEST" as const;
export const CREATE_RECOMMENT_SUCCESS =
  "recomment/CREATE_RECOMMENT_SUCCESS" as const;
export const CREATE_RECOMMENT_FAILURE =
  "recomment/CREATE_RECOMMENT_FAILURE" as const;

export const GET_RECOMMENTS_REQUEST =
  "recomment/GET_RECOMMENTS_REQUEST" as const;
export const GET_RECOMMENTS_SUCCESS =
  "recomment/GET_RECOMMENTS_SUCCESS" as const;
export const GET_RECOMMENTS_FAILURE =
  "recomment/GET_RECOMMENTS_FAILURE" as const;

export const createRecommentActions = createAsyncAction(
  CREATE_RECOMMENT_REQUEST,
  CREATE_RECOMMENT_SUCCESS,
  CREATE_RECOMMENT_FAILURE,
)<any, AxiosResponse, AxiosError>();

export const getRecommentActions = createAsyncAction(
  GET_RECOMMENTS_REQUEST,
  GET_RECOMMENTS_SUCCESS,
  GET_RECOMMENTS_FAILURE,
)<any, AxiosResponse, AxiosError>();
