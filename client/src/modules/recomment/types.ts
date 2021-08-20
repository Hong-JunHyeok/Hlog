import { AxiosError } from "axios";
import { ActionType } from "typesafe-actions";
import { Recomment } from "../../types/Recomment";
import * as recommentActions from "./actions";

export type RecommentAction = ActionType<typeof recommentActions>;

export interface IRecommentState {
  createRecommentLoading: boolean;
  createRecommentDone: boolean;
  createRecommentError: null | AxiosError;

  getRecommentsLoading: boolean;
  getRecommentsDone: boolean;
  getRecommentsError: null | AxiosError;

  recomments: Recomment[];
}
