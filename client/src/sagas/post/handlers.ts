import { put, call } from "redux-saga/effects";
import { AnyAction } from "redux";
import { getPostsAction } from "../../modules/post/actions";
import { getPostsAPI } from "../../utils/api/auth/getPostsAPI";

export function* handleGetPosts(action: AnyAction) {
  try {
    const response = yield call(getPostsAPI);
    yield put(getPostsAction.success(response.data));
  } catch (error) {
    yield put(getPostsAction.failure(error.response.data));
  }
}
