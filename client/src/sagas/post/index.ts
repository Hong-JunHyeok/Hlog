import { all, fork } from "redux-saga/effects";
import {
  watchCreatePost,
  watchGetUserPosts,
  watchGetPost,
  watchGetPosts,
  watchThumnailUpload,
} from "./watchers";

export default function* postSaga() {
  yield all([
    fork(watchGetPosts),
    fork(watchGetUserPosts),
    fork(watchGetPost),
    fork(watchCreatePost),
    fork(watchThumnailUpload),
  ]);
}
