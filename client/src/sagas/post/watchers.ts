import { takeLatest } from "redux-saga/effects";
import { GET_POSTS_REQUEST } from "../../modules/post/actions";
import { handleGetPosts } from "./handlers";

export function* watchGetPosts() {
  yield takeLatest(GET_POSTS_REQUEST, handleGetPosts);
}
