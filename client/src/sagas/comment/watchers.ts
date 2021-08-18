import { takeLatest } from "@redux-saga/core/effects";
import {
  CREATE_COMMENT_REQUEST,
  GET_COMMENTS_REQUEST,
} from "../../modules/comment/actions";
import { handleCreateComment, handleGetComments } from "./handlers";

export function* watchGetComments() {
  yield takeLatest(GET_COMMENTS_REQUEST, handleGetComments);
}

export function* watchCreateComment() {
  yield takeLatest(CREATE_COMMENT_REQUEST, handleCreateComment);
}
