import { all, fork } from "redux-saga/effects";
import { watchCreateComment, watchGetComments } from "./watchers";

export default function* commentSaga() {
  yield all([fork(watchGetComments), fork(watchCreateComment)]);
}
