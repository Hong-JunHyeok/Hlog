import { ActionType } from "typesafe-actions";
import { AxiosError } from "axios";
import * as postActions from "./actions";
import { Post } from "../../types/Post";

export type PostAction = ActionType<typeof postActions>;

export interface IPostState {
  getPostDone: boolean;
  getPostError: null | AxiosError;
  getPostLoading: boolean;

  getPostsDone: boolean;
  getPostsError: null | AxiosError;
  getPostsLoading: boolean;

  posts: Post[];
  post: Post;
}
