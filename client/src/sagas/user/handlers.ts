import { AnyAction } from "redux";
import { put, call } from "redux-saga/effects";
import { loginAsyncAction } from "../../modules/user/actions";
import { loginAPI } from "../../utils/api/auth/loginAPI";

export function* handleLogin(action: AnyAction) {
  try {
    const response = yield call(loginAPI, action.payload);
    console.log(response);
    yield put(loginAsyncAction.success(response));
  } catch (error) {
    yield put(loginAsyncAction.failure(error.response.data));
  }
}
