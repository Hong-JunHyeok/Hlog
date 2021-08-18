import { AnyAction } from "redux";
import { call, put } from "redux-saga/effects";
import { getCommentsActions } from "../../modules/comment/actions";
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
