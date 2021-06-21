import { combineReducers, AnyAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import counter, { CounterState } from "./counter";

export interface State {
  counter: CounterState;
}

const rootReducer = (state: State | undefined, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;

    default: {
      const combineReducer = combineReducers({
        //reducers...
        counter,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
