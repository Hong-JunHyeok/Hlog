import { all, fork } from "redux-saga/effects";
import { watchJoin, watchLogin } from "./watchers";

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchJoin)]);
}
