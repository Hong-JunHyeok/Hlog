import { takeLatest } from "redux-saga/effects";
import {
  CREATE_POST_REQUEST,
  GET_USER_POSTS_REQUEST,
  GET_POSTS_REQUEST,
  GET_POST_REQUEST,
  THUMNAIL_UPLOAD_REQUEST,
} from "../../modules/post/actions";
import {
  handleCreatePost,
  handleGetPost,
  handleGetPosts,
  handleGetUserPosts,
  handleThumnailUpload,
} from "./handlers";

export function* watchGetPosts() {
  yield takeLatest(GET_POSTS_REQUEST, handleGetPosts);
}

export function* watchGetUserPosts() {
  yield takeLatest(GET_USER_POSTS_REQUEST, handleGetUserPosts);
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
