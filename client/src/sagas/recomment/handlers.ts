import { toast } from "react-toastify";
import { AnyAction } from "redux";
import { call, put } from "redux-saga/effects";
import { createRecommentActions } from "../../modules/recomment/actions";
import { createRecommentAPI } from "../../utils/api/recomment/createRecommentAPI";

export function* handleCreateRecomment(action: AnyAction) {
  try {
    yield call(createRecommentAPI, action.payload);

    toast.success("성공적으로 답글작성을 완료하였습니다.");
    yield put(createRecommentActions.success(action.payload));
  } catch (error) {
    console.log(error.response);
    yield put(createRecommentActions.failure(error));
  }
}
