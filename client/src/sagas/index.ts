import { all, fork } from "redux-saga/effects";
import axios from "axios";
import userSaga from "./user";
import { isDevMode } from "../utils/isDevMode";

axios.defaults.baseURL = isDevMode() ? "http://localhost:8080/api/v1" : "";

export default function* rootSaga() {
  yield all([fork(userSaga)]);
}
