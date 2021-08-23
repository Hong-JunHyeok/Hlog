import { toast } from "react-toastify";
import { AnyAction } from "redux";
import { call, put } from "redux-saga/effects";
import {
  createRecommentActions,
  deleteRecommentActions,
  getRecommentActions,
} from "../../modules/recomment/actions";
import { createRecommentAPI } from "../../utils/api/recomment/createRecommentAPI";
import { deleteRecommentAPI } from "../../utils/api/recomment/deleteRecommentAPI";
import { getRecommentsAPI } from "../../utils/api/recomment/getRecommentsAPI";

export function* handleCreateRecomment(action: AnyAction) {
  try {
    yield call(createRecommentAPI, action.payload);

    toast.success("성공적으로 답글작성을 완료하였습니다.");
    yield put(createRecommentActions.success(action.payload));
  } catch (error) {
    yield put(createRecommentActions.failure(error));
  }
}

export function* handleDeleteRecomment(action: AnyAction) {
  try {
    yield call(deleteRecommentAPI, action.payload);

    toast.success("성공적으로 답글을 삭제했습니다.");
    yield put(deleteRecommentActions.success(action.payload));
  } catch (error) {
    yield put(deleteRecommentActions.failure(error));
  }
}

export function* handleGetRecomments(action: AnyAction) {
  try {
    const response = yield call(getRecommentsAPI, action.payload);

    yield put(getRecommentActions.success(response));
  } catch (error) {
    toast.error(error.response);
    yield put(getRecommentActions.failure(error));
  }
}
