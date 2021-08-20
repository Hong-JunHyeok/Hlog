import { AxiosError } from "axios";
import { ActionType } from "typesafe-actions";
import { Comment } from "../../types/Comment";
import * as commentActions from "./actions";

export type CommentAction = ActionType<typeof commentActions>;

export interface ICommentState {
  getCommentsLoading: boolean;
  getCommentsError: null | AxiosError;
  getCommentsDone: boolean;

  createCommentLoading: boolean;
  createCommentDone: boolean;
  createCommentError: null | AxiosError;

  deleteCommentLoading: boolean;
  deleteCommentDone: boolean;
  deleteCommentError: null | AxiosError;

  comments: Comment[];
}
