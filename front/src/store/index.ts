import {
  configureStore,
  getDefaultMiddleware,
  EnhancedStore,
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import rootReducer, { State } from "./slices";
import slice from "./slices";

const isDevMode = process.env.NODE_ENV === "development";

const store = configureStore({
  reducer: slice,
  middleware: [...getDefaultMiddleware()],
  devTools: isDevMode,
});

const setupStore = (context: any): EnhancedStore => store;

const makeStore = (context) => setupStore(context);

export const wrapper = createWrapper(makeStore, {
  debug: isDevMode,
});

export type RootState = State;
export type AppDispatch = typeof store.dispatch;

export default wrapper;
