import { takeLatest } from "redux-saga/effects";
import {
  JOIN_REQUEST,
  LOAD_MY_INFO_REQUEST,
  LOAD_USER_INFO_REQUEST,
  LOGOUT_REQUEST,
  LOG_IN_REQUEST,
} from "../../modules/user/actions";
import {
  handleJoin,
  handleLoadMyInfo,
  handleLoadUserInfo,
  handleLogin,
  handleLogout,
} from "./handlers";

export function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, handleLogin);
}

export function* watchJoin() {
  yield takeLatest(JOIN_REQUEST, handleJoin);
}

export function* watchLogout() {
  yield takeLatest(LOGOUT_REQUEST, handleLogout);
}

export function* watchLoadMyInfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, handleLoadMyInfo);
}

export function* watchLoadUserInfo() {
  yield takeLatest(LOAD_USER_INFO_REQUEST, handleLoadUserInfo);
}
