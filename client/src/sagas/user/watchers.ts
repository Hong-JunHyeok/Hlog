import { takeLatest } from "redux-saga/effects";
import {
  JOIN_REQUEST,
  LOAD_MY_INFO_REQUEST,
  LOG_IN_REQUEST,
} from "../../modules/user/actions";
import { handleJoin, handleLoadMyInfo, handleLogin } from "./handlers";

export function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, handleLogin);
}

export function* watchJoin() {
  yield takeLatest(JOIN_REQUEST, handleJoin);
}

export function* watchLoadMyInfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, handleLoadMyInfo);
}
