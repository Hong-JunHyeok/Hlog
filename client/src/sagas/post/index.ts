import { all, fork } from "redux-saga/effects";
import { watchCreatePost, watchGetPost, watchGetPosts } from "./watchers";

export default function* postSaga() {
  yield all([fork(watchGetPosts), fork(watchGetPost), fork(watchCreatePost)]);
}
