import { all, fork } from "redux-saga/effects";
import { watchCreateRecomment } from "./watchers";

export default function* recommentSaga() {
  yield all([fork(watchCreateRecomment)]);
}
