import { toast } from "react-toastify";
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
    yield call(createCommentAPI, action.payload);

    toast.success("성공적으로 댓글작성을 완료하였습니다.");
    yield put(createCommentActions.success(action.payload));
  } catch (error) {
    yield put(createCommentActions.failure(error));
  }
}
