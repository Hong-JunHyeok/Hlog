import { put, call } from "redux-saga/effects";
import { AnyAction } from "redux";
import {
  createPostAction,
  getUserPostsAction,
  getPostAction,
  getPostsAction,
  thumnailUploadAction,
} from "../../modules/post/actions";
import { getPostAPI } from "../../utils/api/post/getPostAPI";
import { getPostsAPI } from "../../utils/api/post/getPostsAPI";
import { createPostAPI } from "../../utils/api/post/createPostAPI";
import { thumnailUploadAPI } from "../../utils/api/post/thumnailUploadAPI";
import { getUserPostsAPI } from "../../utils/api/post/getUserPostsAPI";

export function* handleGetPosts(action: AnyAction) {
  try {
    const response = yield call(getPostsAPI);
    yield put(getPostsAction.success(response.data));
  } catch (error) {
    yield put(getPostsAction.failure(error.response.data));
  }
}

export function* handleGetUserPosts(action: AnyAction) {
  try {
    const response = yield call(getUserPostsAPI, action.payload);
    yield put(getUserPostsAction.success(response.data));
  } catch (error) {
    yield put(getUserPostsAction.failure(error.response.data));
  }
}

export function* handleGetPost(action: AnyAction) {
  try {
    const response = yield call(getPostAPI, action.payload);

    yield put(getPostAction.success(response));
  } catch (error) {
    yield put(getPostAction.failure(error.response.status));
  }
}

export function* handleCreatePost(action: AnyAction) {
  try {
    const response = yield call(createPostAPI, action.payload);

    yield put(createPostAction.success(response));
  } catch (error) {
    yield put(createPostAction.failure(error.response.status));
  }
}

export function* handleThumnailUpload(action: AnyAction) {
  try {
    const response = yield call(thumnailUploadAPI, action.payload);

    yield put(thumnailUploadAction.success(response));
  } catch (error) {
    yield put(thumnailUploadAction.failure(error));
  }
}
