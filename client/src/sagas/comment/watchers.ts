import { takeLatest } from "redux-saga/effects";
import {
  CREATE_COMMENT_REQUEST,
  DELETE_COMMENT_REQUEST,
  GET_COMMENTS_REQUEST,
} from "../../modules/comment/actions";
import {
  handleCreateComment,
  handleDeleteComment,
  handleGetComments,
} from "./handlers";

export function* watchGetComments() {
  yield takeLatest(GET_COMMENTS_REQUEST, handleGetComments);
}

export function* watchCreateComment() {
  yield takeLatest(CREATE_COMMENT_REQUEST, handleCreateComment);
}

export function* watchDeleteComment() {
  yield takeLatest(DELETE_COMMENT_REQUEST, handleDeleteComment);
}
