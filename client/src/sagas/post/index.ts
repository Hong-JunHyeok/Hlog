import { all, fork } from "redux-saga/effects";
import { watchGetPosts } from "./watchers";

export default function* postSaga() {
  yield all([fork(watchGetPosts)]);
}
