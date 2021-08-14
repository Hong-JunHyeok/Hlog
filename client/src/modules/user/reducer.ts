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
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  LOAD_USER_INFO_REQUEST,
  LOAD_USER_INFO_SUCCESS,
  LOAD_USER_INFO_FAILURE,
} from "./actions";
import { IUserState, UserAction } from "./types";

export const userInitialState: IUserState = {
  loginDone: false,
  loginError: null,
  loginLoading: false,

  joinDone: false,
  joinError: null,
  joinLoading: false,

  logoutDone: false,
  logoutError: null,
  logoutLoading: false,

  loadMyInfoDone: false,
  loadMyInfoError: null,
  loadMyInfoLoading: false,

  loadUserInfoDone: false,
  loadUserInfoError: null,
  loadUserInfoLoading: false,

  me: null,
  userInfo: null,
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
  [LOAD_USER_INFO_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.loadUserInfoLoading = true;
      draft.loadUserInfoError = null;
      draft.loadUserInfoDone = false;

      draft.userInfo = null;
    }),
  [LOAD_USER_INFO_SUCCESS]: (state, action) =>
    produce(state, (draft) => {
      draft.loadUserInfoLoading = false;
      draft.loadUserInfoDone = true;

      draft.userInfo = action.payload.data.user;
    }),
  [LOAD_USER_INFO_FAILURE]: (state, action) =>
    produce(state, (draft) => {
      draft.loadUserInfoLoading = false;
      draft.loadUserInfoError = action.payload;
      draft.loadUserInfoDone = false;

      draft.userInfo = null;
    }),
  [LOGOUT_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.logoutLoading = true;
      draft.logoutError = null;
      draft.logoutDone = false;
    }),
  [LOGOUT_SUCCESS]: (state) =>
    produce(state, (draft) => {
      draft.logoutLoading = false;
      draft.logoutDone = true;

      draft.loginDone = false;
      draft.me = null;
    }),
  [LOGOUT_FAILURE]: (state, action) =>
    produce(state, (draft) => {
      draft.logoutLoading = false;
      draft.logoutError = action.payload;
      draft.logoutDone = false;
    }),
});
