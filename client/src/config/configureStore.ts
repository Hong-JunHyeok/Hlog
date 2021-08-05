import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../modules";
import { isDevMode } from "../utils/isDevMode";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const enhancer = isDevMode()
    ? composeWithDevTools(applyMiddleware(...middlewares))
    : compose(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(configureStore, {
  // debug: isDevMode() ? true : false,
  debug: false,
});

export default wrapper;
