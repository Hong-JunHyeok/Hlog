import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, CombinedState, combineReducers } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import { IUserState } from "./user/types";
import { IPostState } from "./post/types";
import { ICommentState } from "./comment/types";

import user from "./user/reducer";
import post from "./post/reducer";
import comment from "./comment/reducer";

interface State {
  user: IUserState;
  post: IPostState;
  comment: ICommentState;
}

const rootReducer = (
  state: State | undefined,
  action: AnyAction,
): CombinedState<State> => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        user,
        post,
        comment,
      });
      return combinedReducer(state, action);
    }
  }
};

export const useTypedSelector: TypedUseSelectorHook<State> = useSelector;

export default rootReducer;
