import { all, fork } from "redux-saga/effects";
import {
  watchCreatePost,
  watchGetMyPosts,
  watchGetPost,
  watchGetPosts,
  watchThumnailUpload,
} from "./watchers";

export default function* postSaga() {
  yield all([
    fork(watchGetPosts),
    fork(watchGetMyPosts),
    fork(watchGetPost),
    fork(watchCreatePost),
    fork(watchThumnailUpload),
  ]);
}
