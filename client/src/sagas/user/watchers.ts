import { takeLatest } from "redux-saga/effects";
import { LOG_IN_REQUEST } from "../../modules/user/actions";
import { handleLogin } from "./handlers";

export function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, handleLogin);
}
