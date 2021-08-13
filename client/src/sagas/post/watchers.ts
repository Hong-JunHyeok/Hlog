import { takeLatest } from "redux-saga/effects";
import {
  CREATE_POST_REQUEST,
  GET_MY_POSTS_REQUEST,
  GET_POSTS_REQUEST,
  GET_POST_REQUEST,
  THUMNAIL_UPLOAD_REQUEST,
} from "../../modules/post/actions";
import {
  handleCreatePost,
  handleGetMyPosts,
  handleGetPost,
  handleGetPosts,
  handleThumnailUpload,
} from "./handlers";

export function* watchGetPosts() {
  yield takeLatest(GET_POSTS_REQUEST, handleGetPosts);
}

export function* watchGetMyPosts() {
  yield takeLatest(GET_MY_POSTS_REQUEST, handleGetMyPosts);
}

export function* watchGetPost() {
  yield takeLatest(GET_POST_REQUEST, handleGetPost);
}

export function* watchCreatePost() {
  yield takeLatest(CREATE_POST_REQUEST, handleCreatePost);
}

export function* watchThumnailUpload() {
  yield takeLatest(THUMNAIL_UPLOAD_REQUEST, handleThumnailUpload);
}
