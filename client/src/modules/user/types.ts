import { ActionType } from "typesafe-actions";
import { AxiosError } from "axios";
import * as userActions from "./actions";

export type UserAction = ActionType<typeof userActions>;

export interface IUserState {
  loginDone: boolean;
  loginError: null | AxiosError;
  loginLoading: boolean;
}
