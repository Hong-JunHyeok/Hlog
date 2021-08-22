import { all, fork } from "redux-saga/effects";
import {
  watchCreateRecomment,
  watchDeleteRecomment,
  watchGetRecomments,
} from "./watchers";

export default function* recommentSaga() {
  yield all([
    fork(watchCreateRecomment),
    fork(watchGetRecomments),
    fork(watchDeleteRecomment),
  ]);
}
