import { AxiosError, AxiosResponse } from "axios";
import { createAsyncAction } from "typesafe-actions";

export const CREATE_RECOMMENT_REQUEST = "recomment/CREATE_RECOMMENT_REQUEST";
export const CREATE_RECOMMENT_SUCCESS = "recomment/CREATE_RECOMMENT_SUCCESS";
export const CREATE_RECOMMENT_FAILURE = "recomment/CREATE_RECOMMENT_FAILURE";

export const GET_RECOMMENTS_REQUEST = "recomment/GET_RECOMMENTS_REQUEST";
export const GET_RECOMMENTS_SUCCESS = "recomment/GET_RECOMMENTS_SUCCESS";
export const GET_RECOMMENTS_FAILURE = "recomment/GET_RECOMMENTS_FAILURE";

export const DELETE_RECOMMENT_REQUEST = "recomment/DELETE_RECOMMENT_REQUEST";
export const DELETE_RECOMMENT_SUCCESS = "recomment/DELETE_RECOMMENT_SUCCESS";
export const DELETE_RECOMMENT_FAILURE = "recomment/DELETE_RECOMMENT_FAILURE";

export const createRecommentActions = createAsyncAction(
  CREATE_RECOMMENT_REQUEST,
  CREATE_RECOMMENT_SUCCESS,
  CREATE_RECOMMENT_FAILURE,
)<any, AxiosResponse, AxiosError>();

export const deleteRecommentActions = createAsyncAction(
  DELETE_RECOMMENT_REQUEST,
  DELETE_RECOMMENT_SUCCESS,
  DELETE_RECOMMENT_FAILURE,
)<any, AxiosResponse, AxiosError>();

export const getRecommentActions = createAsyncAction(
  GET_RECOMMENTS_REQUEST,
  GET_RECOMMENTS_SUCCESS,
  GET_RECOMMENTS_FAILURE,
)<any, AxiosResponse, AxiosError>();
