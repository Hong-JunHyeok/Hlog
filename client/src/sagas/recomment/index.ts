import { all, fork } from "redux-saga/effects";
import { watchCreateRecomment, watchGetRecomments } from "./watchers";

export default function* recommentSaga() {
  yield all([fork(watchCreateRecomment), fork(watchGetRecomments)]);
}
