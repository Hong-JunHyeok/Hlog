import produce from "immer";
import { createReducer } from "typesafe-actions";
import * as postActions from "./actions";
import { IPostState, PostAction } from "./types";

export const postInitialState: IPostState = {
  getPostDone: false,
  getPostError: null,
  getPostLoading: false,

  getPostsDone: false,
  getPostsError: null,
  getPostsLoading: false,

  posts: [],
  post: null,
};

export default createReducer<IPostState, PostAction>(postInitialState, {
  [postActions.GET_POSTS_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.getPostDone = false;
      draft.getPostError = null;
      draft.getPostLoading = true;
    }),
  [postActions.GET_POSTS_SUCCESS]: (state, action) =>
    produce(state, (draft) => {
      draft.getPostDone = true;
      draft.getPostLoading = false;

      draft.posts = action.payload.data.posts;
    }),
  [postActions.GET_POSTS_FAILURE]: (state, action) =>
    produce(state, (draft) => {
      draft.getPostError = action.payload;
      draft.getPostLoading = false;
    }),

  [postActions.GET_POST_REQUEST]: (state) => produce(state, (draft) => {}),
  [postActions.GET_POST_SUCCESS]: (state) => produce(state, (draft) => {}),
  [postActions.GET_POST_FAILURE]: (state) => produce(state, (draft) => {}),
});
