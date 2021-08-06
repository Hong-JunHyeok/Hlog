import produce from "immer";
import { createReducer } from "typesafe-actions";
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  JOIN_REQUEST,
  JOIN_SUCCESS,
  JOIN_FAILURE,
  LOAD_MY_INFO_REQUEST,
  LOAD_MY_INFO_SUCCESS,
  LOAD_MY_INFO_FAILURE,
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

  loadMyInfoDone: false,
  loadMyInfoError: null,
  loadMyInfoLoading: false,

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

      draft.me = action.payload.data;
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
  [LOAD_MY_INFO_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.loadMyInfoLoading = true;
      draft.loadMyInfoError = null;
      draft.loadMyInfoDone = false;
    }),
  [LOAD_MY_INFO_SUCCESS]: (state, action) =>
    produce(state, (draft) => {
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoDone = true;

      console.log(action.payload.data);
      draft.me = action.payload.data.user;
      if (draft.me) {
        draft.loginDone = true;
      }
    }),
  [LOAD_MY_INFO_FAILURE]: (state, action) =>
    produce(state, (draft) => {
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoError = action.payload;
      draft.loadMyInfoDone = false;

      draft.me = null;
    }),
  [LOG_OUT]: (state) =>
    produce(state, (draft) => {
      draft.loginDone = false;
      draft.loginError = null;
      draft.loginLoading = false;

      draft.me = null;
    }),
});
