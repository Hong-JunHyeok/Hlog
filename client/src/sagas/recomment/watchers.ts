import { takeLatest } from "redux-saga/effects";
import {
  CREATE_RECOMMENT_REQUEST,
  DELETE_RECOMMENT_REQUEST,
  GET_RECOMMENTS_REQUEST,
} from "../../modules/recomment/actions";
import {
  handleCreateRecomment,
  handleDeleteRecomment,
  handleGetRecomments,
} from "./handlers";

export function* watchCreateRecomment() {
  yield takeLatest(CREATE_RECOMMENT_REQUEST, handleCreateRecomment);
}

export function* watchGetRecomments() {
  yield takeLatest(GET_RECOMMENTS_REQUEST, handleGetRecomments);
}

export function* watchDeleteRecomment() {
  yield takeLatest(DELETE_RECOMMENT_REQUEST, handleDeleteRecomment);
}
