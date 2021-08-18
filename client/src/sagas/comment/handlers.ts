import { AnyAction } from "redux";
import { call, put } from "redux-saga/effects";
import {
  createCommentActions,
  getCommentsActions,
} from "../../modules/comment/actions";
import { createCommentAPI } from "../../utils/api/comment/createCommentAPI";
import { getCommentsAPI } from "../../utils/api/comment/getCommentsAPI";

export function* handleGetComments(action: AnyAction) {
  try {
    const response = yield call(getCommentsAPI, action.payload);

    yield put(getCommentsActions.success(response));
  } catch (error) {
    console.log(error.response);
    yield put(getCommentsActions.failure(error));
  }
}

export function* handleCreateComment(action: AnyAction) {
  try {
    const response = yield call(createCommentAPI, action.payload);
    console.log(response);

    yield put(createCommentActions.success());
  } catch (error) {
    yield put(createCommentActions.failure(error));
  }
}
