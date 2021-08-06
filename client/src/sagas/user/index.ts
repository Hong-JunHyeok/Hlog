import { all, fork } from "redux-saga/effects";
import { watchJoin, watchLoadMyInfo, watchLogin } from "./watchers";

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchJoin), fork(watchLoadMyInfo)]);
}
