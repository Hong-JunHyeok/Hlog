import produce from "immer";
import { createReducer } from "typesafe-actions";
import { IRecommentState, RecommentAction } from "./types";
import * as recommentActions from "./actions";

export const recommentInitialState: IRecommentState = {
  createRecommentLoading: false,
  createRecommentDone: false,
  createRecommentError: null,

  deleteRecommentLoading: false,
  deleteRecommentDone: false,
  deleteRecommentError: null,

  getRecommentsLoading: false,
  getRecommentsDone: false,
  getRecommentsError: null,

  recomments: {},
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
    [recommentActions.DELETE_RECOMMENT_REQUEST]: (state) =>
      produce(state, (draft) => {
        draft.deleteRecommentDone = false;
        draft.deleteRecommentLoading = true;
        draft.deleteRecommentError = null;
      }),
    [recommentActions.DELETE_RECOMMENT_SUCCESS]: (state) =>
      produce(state, (draft) => {
        draft.deleteRecommentDone = true;
        draft.deleteRecommentLoading = false;

        draft.recomments = {};
      }),
    [recommentActions.DELETE_RECOMMENT_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.deleteRecommentError = action.payload;
        draft.deleteRecommentLoading = false;
      }),
    [recommentActions.GET_RECOMMENTS_REQUEST]: (state) =>
      produce(state, (draft) => {
        draft.getRecommentsDone = false;
        draft.getRecommentsLoading = true;
        draft.getRecommentsError = null;
      }),
    [recommentActions.GET_RECOMMENTS_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.getRecommentsDone = true;
        draft.getRecommentsLoading = false;

        const recomments = action.payload.data.recomments;
        draft.recomments[recomments[0].commentId] = recomments;
      }),
    [recommentActions.GET_RECOMMENTS_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.getRecommentsError = action.payload;
        draft.getRecommentsLoading = false;
      }),
  },
);
