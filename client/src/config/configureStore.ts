import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../modules";
import { isDevMode } from "../utils/isDevMode";

const configureStore = () => {
  const middlewares = [];

  const enhancer = isDevMode()
    ? composeWithDevTools(applyMiddleware(...middlewares))
    : compose(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, enhancer);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: isDevMode() ? true : false,
});

export default wrapper;
