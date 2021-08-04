import { put, delay } from "redux-saga/effects";
import { loginAsyncAction } from "../../modules/user/actions";

export function* handleLogin() {
  try {
    yield put(loginAsyncAction.success());
  } catch (error) {
    // yield put(loginAsyncAction.failure());
  }
}
