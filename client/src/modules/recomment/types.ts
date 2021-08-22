import { AxiosError } from "axios";
import { ActionType } from "typesafe-actions";
import * as recommentActions from "./actions";

export type RecommentAction = ActionType<typeof recommentActions>;

export interface IRecommentState {
  createRecommentLoading: boolean;
  createRecommentDone: boolean;
  createRecommentError: null | AxiosError;

  getRecommentsLoading: boolean;
  getRecommentsDone: boolean;
  getRecommentsError: null | AxiosError;

  deleteRecommentLoading: boolean;
  deleteRecommentDone: boolean;
  deleteRecommentError: null | AxiosError;

  recomments: any;
}
