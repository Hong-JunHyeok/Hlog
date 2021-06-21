import { combineReducers, AnyAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import counter, { CounterState } from "./counter";
import post, { PostState } from "./post";

export interface State {
  counter: CounterState;
  post: PostState;
}

const rootReducer = (state: State | undefined, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;

    default: {
      const combineReducer = combineReducers({
        //reducers...
        counter,
        post,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
