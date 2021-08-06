import { all, fork } from "redux-saga/effects";
import axios from "axios";
import { isDevMode } from "../utils/isDevMode";

import userSaga from "./user";
import postSaga from "./post";

axios.defaults.baseURL = isDevMode() ? "http://localhost:8080/api/v1" : "";
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(userSaga), fork(postSaga)]);
}
