import { all, fork } from "redux-saga/effects";
import { watchGetPost, watchGetPosts } from "./watchers";

export default function* postSaga() {
  yield all([fork(watchGetPosts), fork(watchGetPost)]);
}
