import produce from "immer";
import { createReducer } from "typesafe-actions";
import { IRecommentState, RecommentAction } from "./types";
import * as recommentActions from "./actions";

export const recommentInitialState: IRecommentState = {
  createRecommentLoading: false,
  createRecommentDone: false,
  createRecommentError: null,

  recomments: [],
};

export default createReducer<IRecommentState, RecommentAction>(
  recommentInitialState,
  {
    [recommentActions.CREATE_RECOMMENT_REQUEST]: (state) =>
      produce(state, (draft) => {
        draft.createRecommentDone = false;
        draft.createRecommentLoading = true;
        draft.createRecommentError = null;
      }),
    [recommentActions.CREATE_RECOMMENT_SUCCESS]: (state) =>
      produce(state, (draft) => {
        draft.createRecommentDone = true;
        draft.createRecommentLoading = false;
      }),
    [recommentActions.CREATE_RECOMMENT_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.createRecommentError = action.payload;
        draft.createRecommentLoading = false;
      }),
  },
);
