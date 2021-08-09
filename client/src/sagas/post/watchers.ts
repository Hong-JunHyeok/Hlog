import { takeLatest } from "redux-saga/effects";
import {
  CREATE_POST_REQUEST,
  GET_POSTS_REQUEST,
  GET_POST_REQUEST,
} from "../../modules/post/actions";
import { handleCreatePost, handleGetPost, handleGetPosts } from "./handlers";

export function* watchGetPosts() {
  yield takeLatest(GET_POSTS_REQUEST, handleGetPosts);
}

export function* watchGetPost() {
  yield takeLatest(GET_POST_REQUEST, handleGetPost);
}

export function* watchCreatePost() {
  yield takeLatest(CREATE_POST_REQUEST, handleCreatePost);
}
