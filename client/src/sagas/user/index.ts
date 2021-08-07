import { all, fork } from "redux-saga/effects";
import {
  watchJoin,
  watchLoadMyInfo,
  watchLogin,
  watchLogout,
} from "./watchers";

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchJoin),
    fork(watchLogout),
    fork(watchLoadMyInfo),
  ]);
}
