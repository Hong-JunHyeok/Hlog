import { ActionType } from "typesafe-actions";
import { AxiosError } from "axios";
import * as userActions from "./actions";
import { User } from "../../types/User";

export type UserAction = ActionType<typeof userActions>;

export interface IUserState {
  loginDone: boolean;
  loginError: null | AxiosError;
  loginLoading: boolean;

  joinDone: boolean;
  joinError: null | AxiosError;
  joinLoading: boolean;

  loadMyInfoDone: boolean;
  loadMyInfoError: null | AxiosError;
  loadMyInfoLoading: boolean;

  me: null | User;
}
