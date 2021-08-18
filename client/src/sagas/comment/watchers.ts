import { takeLatest } from "@redux-saga/core/effects";
import { GET_COMMENTS_REQUEST } from "../../modules/comment/actions";
import { handleGetComments } from "./handlers";

export function* watchGetComments() {
  yield takeLatest(GET_COMMENTS_REQUEST, handleGetComments);
}
