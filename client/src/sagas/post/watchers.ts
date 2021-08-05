import { takeLatest } from "redux-saga/effects";
import {
  GET_POSTS_REQUEST,
  GET_POST_REQUEST,
} from "../../modules/post/actions";
import { handleGetPost, handleGetPosts } from "./handlers";

export function* watchGetPosts() {
  yield takeLatest(GET_POSTS_REQUEST, handleGetPosts);
}

export function* watchGetPost() {
  yield takeLatest(GET_POST_REQUEST, handleGetPost);
}
