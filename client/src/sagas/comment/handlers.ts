import { toast } from "react-toastify";
import { AnyAction } from "redux";
import { call, put } from "redux-saga/effects";
import {
  createCommentActions,
  deleteCommentActions,
  getCommentsActions,
} from "../../modules/comment/actions";
import { createCommentAPI } from "../../utils/api/comment/createCommentAPI";
import { deleteCommentAPI } from "../../utils/api/comment/deleteCommentAPI";
import { getCommentsAPI } from "../../utils/api/comment/getCommentsAPI";

export function* handleGetComments(action: AnyAction) {
  try {
    const response = yield call(getCommentsAPI, action.payload);

    yield put(getCommentsActions.success(response));
  } catch (error) {
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

export function* handleDeleteComment(action: AnyAction) {
  try {
    yield call(deleteCommentAPI, action.payload);

    toast.success("성공적으로 댓글을 삭제하였습니다.");
    yield put(deleteCommentActions.success(action.payload));
  } catch (error) {
    yield put(deleteCommentActions.failure(error));
  }
}
