import { AnyAction } from "redux";
import { AxiosResponse } from "axios";
import { put, call } from "redux-saga/effects";
import {
  joinAsyncAction,
  loadMyInfoAction,
  loginAsyncAction,
} from "../../modules/user/actions";

import { joinAPI } from "../../utils/api/auth/joinAPI";
import { loginAPI } from "../../utils/api/auth/loginAPI";
import { loadMyInfoAPI } from "../../utils/api/auth/loadMyInfoAPI";

export function* handleLogin(action: AnyAction) {
  try {
    const response: AxiosResponse = yield call(loginAPI, action.payload);

    yield put(loginAsyncAction.success(response));
  } catch (error) {
    yield put(loginAsyncAction.failure(error.response.data));
  }
}

export function* handleJoin(action: AnyAction) {
  try {
    const response = yield call(joinAPI, action.payload);

    yield put(joinAsyncAction.success(response.data));
  } catch (error) {
    yield put(joinAsyncAction.failure(error.response.data));
  }
}

export function* handleLoadMyInfo() {
  try {
    const response = yield call(loadMyInfoAPI);

    yield put(loadMyInfoAction.success(response));
  } catch (error) {
    yield put(loadMyInfoAction.failure(error.response.data));
  }
}
