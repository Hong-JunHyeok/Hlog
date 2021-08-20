import { takeLatest } from "redux-saga/effects";
import {
  CREATE_RECOMMENT_REQUEST,
  GET_RECOMMENTS_REQUEST,
} from "../../modules/recomment/actions";
import { handleCreateRecomment, handleGetRecomments } from "./handlers";

export function* watchCreateRecomment() {
  yield takeLatest(CREATE_RECOMMENT_REQUEST, handleCreateRecomment);
}

export function* watchGetRecomments() {
  yield takeLatest(GET_RECOMMENTS_REQUEST, handleGetRecomments);
}
