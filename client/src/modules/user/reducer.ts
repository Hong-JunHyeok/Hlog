import produce from "immer";
import { createReducer } from "typesafe-actions";
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  JOIN_REQUEST,
  JOIN_SUCCESS,
  JOIN_FAILURE,
  LOG_OUT,
} from "./actions";
import { IUserState, UserAction } from "./types";

export const userInitialState: IUserState = {
  loginDone: false,
  loginError: null,
  loginLoading: false,

  joinDone: false,
  joinError: null,
  joinLoading: false,

  me: null,
};

export default createReducer<IUserState, UserAction>(userInitialState, {
  [LOG_IN_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.loginLoading = true;
      draft.loginError = null;
      draft.loginDone = false;

      draft.me = null;
    }),
  [LOG_IN_SUCCESS]: (state, action) =>
    produce(state, (draft) => {
      draft.loginLoading = false;
      draft.loginDone = true;

      draft.me = action.payload.data.user;
    }),
  [LOG_IN_FAILURE]: (state, action) =>
    produce(state, (draft) => {
      draft.loginLoading = false;
      draft.loginError = action.payload;
      draft.loginDone = false;

      draft.me = null;
    }),
  [JOIN_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.joinLoading = true;
      draft.joinError = null;
      draft.joinDone = false;
    }),
  [JOIN_SUCCESS]: (state) =>
    produce(state, (draft) => {
      draft.joinLoading = false;
      draft.joinDone = true;
    }),
  [JOIN_FAILURE]: (state, action) =>
    produce(state, (draft) => {
      draft.joinLoading = false;
      draft.joinError = action.payload;
      draft.joinDone = false;
    }),
  [LOG_OUT]: (state) =>
    produce(state, (draft) => {
      draft.loginDone = false;
      draft.loginError = null;
      draft.loginLoading = false;

      draft.me = null;
    }),
});
