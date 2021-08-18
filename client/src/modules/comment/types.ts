import { AxiosError } from "axios";
import { ActionType } from "typesafe-actions";
import * as commentActions from "./actions";

export type CommentAction = ActionType<typeof commentActions>;

export interface ICommentState {
  getCommentsLoading: boolean;
  getCommentsError: null | AxiosError;
  getCommentsDone: boolean;

  createCommentLoading: boolean;
  createCommentDone: boolean;
  createCommentError: null | AxiosError;

  comments: [];
}
