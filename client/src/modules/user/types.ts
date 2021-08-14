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

  logoutDone: boolean;
  logoutError: null | AxiosError;
  logoutLoading: boolean;

  loadMyInfoDone: boolean;
  loadMyInfoError: null | AxiosError;
  loadMyInfoLoading: boolean;

  loadUserInfoDone: boolean;
  loadUserInfoError: null | AxiosError;
  loadUserInfoLoading: boolean;

  userInfo: null | User;

  me: null | User;
}
