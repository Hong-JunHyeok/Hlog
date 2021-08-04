import { all, fork } from "redux-saga/effects";
import { watchLogin } from "./watchers";

export default function* userSaga() {
  yield all([fork(watchLogin)]);
}
