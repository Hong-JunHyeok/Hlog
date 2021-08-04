import produce from "immer";
import { createReducer } from "typesafe-actions";
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT,
} from "./actions";
import { IUserState, UserAction } from "./types";

export const userInitialState: IUserState = {
  loginDone: false,
  loginError: null,
  loginLoading: false,
};

export default createReducer<IUserState, UserAction>(userInitialState, {
  [LOG_IN_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.loginLoading = true;
      draft.loginError = null;
      draft.loginDone = false;
    }),
  [LOG_IN_SUCCESS]: (state) =>
    produce(state, (draft) => {
      draft.loginLoading = false;
      draft.loginDone = true;
    }),
  [LOG_IN_FAILURE]: (state, action) =>
    produce(state, (draft) => {
      draft.loginLoading = false;
      draft.loginError = action.payload;
      draft.loginDone = false;
    }),
  [LOG_OUT]: (state) =>
    produce(state, (draft) => {
      draft.loginDone = false;
      draft.loginError = null;
      draft.loginLoading = false;
    }),
});
