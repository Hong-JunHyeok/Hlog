import { takeLatest } from "redux-saga/effects";
import { CREATE_RECOMMENT_REQUEST } from "../../modules/recomment/actions";
import { handleCreateRecomment } from "./handlers";

export function* watchCreateRecomment() {
  yield takeLatest(CREATE_RECOMMENT_REQUEST, handleCreateRecomment);
}
