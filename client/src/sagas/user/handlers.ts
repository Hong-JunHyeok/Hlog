import { AnyAction } from "redux";
import { put, call } from "redux-saga/effects";
import { joinAsyncAction, loginAsyncAction } from "../../modules/user/actions";
import { joinAPI } from "../../utils/api/auth/joinAPI";
import { loginAPI } from "../../utils/api/auth/loginAPI";

export function* handleLogin(action: AnyAction) {
  try {
    const response = yield call(loginAPI, action.payload);
    console.log(response);
    yield put(loginAsyncAction.success(response.data));
  } catch (error) {
    yield put(loginAsyncAction.failure(error.response.data));
  }
}

export function* handleJoin(action: AnyAction) {
  try {
    const response = yield call(joinAPI, action.payload);
    console.log(response);
    yield put(joinAsyncAction.success(response.data));
  } catch (error) {
    yield put(joinAsyncAction.failure(error.response.data));
  }
}
