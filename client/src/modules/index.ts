import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, CombinedState, combineReducers } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { IUserState } from "./user/types";

import user from "./user/reducer";

interface State {
  user: IUserState;
}

const rootReducer = (
  state: State | undefined,
  action: AnyAction,
): CombinedState<State> => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default: {
      const combinedReducer = combineReducers({
        user,
      });
      return combinedReducer(state, action);
    }
  }
};

export const useTypedSelector: TypedUseSelectorHook<State> = useSelector;

export default rootReducer;
