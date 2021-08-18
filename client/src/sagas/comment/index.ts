import { all, fork } from "redux-saga/effects";
import { watchGetComments } from "./watchers";

export default function* commentSaga() {
  yield all([fork(watchGetComments)]);
}
