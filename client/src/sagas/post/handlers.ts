import { put, call } from "redux-saga/effects";
import { AnyAction } from "redux";
import { getPostAction, getPostsAction } from "../../modules/post/actions";
import { getPostsAPI } from "../../utils/api/auth/getPostsAPI";
import { getPostAPI } from "../../utils/api/auth/getPostAPI";

export function* handleGetPosts(action: AnyAction) {
  try {
    const response = yield call(getPostsAPI);
    yield put(getPostsAction.success(response.data));
  } catch (error) {
    yield put(getPostsAction.failure(error.response.data));
  }
}

export function* handleGetPost(action: AnyAction) {
  try {
    const response = yield call(getPostAPI, action.payload);
    console.log(response);
    yield put(getPostAction.success(response));
  } catch (error) {
    yield put(getPostsAction.failure(error.response.data));
  }
}
