import produce from "immer";
import { createReducer } from "typesafe-actions";
import { LOG_IN, LOG_OUT } from "./actions";
import { IUserState, UserAction } from "./types";

export const userInitialState: IUserState = {
  isLoggedIn: false,
};

export default createReducer<IUserState, UserAction>(userInitialState, {
  [LOG_IN]: (state) =>
    produce(state, (draft) => {
      draft.isLoggedIn = true;
    }),
  [LOG_OUT]: (state) =>
    produce(state, (draft) => {
      draft.isLoggedIn = false;
    }),
});
