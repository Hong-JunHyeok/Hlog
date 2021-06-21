import {
  applyMiddleware,
  createStore,
  Middleware,
  Store,
  StoreEnhancer,
} from "redux";
import { createWrapper, MakeStore } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";

//* Root Reducer & Sagas
import rootReducer from "./reducers";
import rootSaga from "./sagas";

//* store-middleware Setting
const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

//* making store
const makeStore: MakeStore<Store> = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const store = createStore(rootReducer, {}, bindMiddleware([...middlewares]));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

//* make redux wrapper
const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
