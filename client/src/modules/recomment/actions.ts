import { AxiosError, AxiosResponse } from "axios";
import { createAsyncAction } from "typesafe-actions";

export const CREATE_RECOMMENT_REQUEST =
  "recomment/CREATE_RECOMMENT_REQUEST" as const;
export const CREATE_RECOMMENT_SUCCESS =
  "recomment/CREATE_RECOMMENT_SUCCESS" as const;
export const CREATE_RECOMMENT_FAILURE =
  "recomment/CREATE_RECOMMENT_FAILURE" as const;

export const createRecommentActions = createAsyncAction(
  CREATE_RECOMMENT_REQUEST,
  CREATE_RECOMMENT_SUCCESS,
  CREATE_RECOMMENT_FAILURE,
)<any, any, AxiosError>();
