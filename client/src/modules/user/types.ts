import { ActionType } from "typesafe-actions";
import * as userActions from "./actions";

export type UserAction = ActionType<typeof userActions>;

export interface IUserState {
  isLoggedIn: boolean;
}
