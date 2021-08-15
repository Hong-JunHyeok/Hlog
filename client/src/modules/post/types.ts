import { ActionType } from "typesafe-actions";
import { AxiosError } from "axios";
import * as postActions from "./actions";
import { Post } from "../../types/Post";

export type PostAction = ActionType<typeof postActions>;

export interface IPostState {
  getPostDone: boolean;
  getPostError: string;
  getPostLoading: boolean;

  createPostDone: boolean;
  createPostError: string;
  createPostLoading: boolean;

  getPostsDone: boolean;
  getPostsError: null | AxiosError;
  getPostsLoading: boolean;

  getUserPostsDone: boolean;
  getUserPostsError: null | AxiosError;
  getUserPostsLoading: boolean;

  deletePostDone: boolean;
  deletePostError: null | AxiosError;
  deletePostLoading: boolean;

  thumnailUploadDone: boolean;
  thumnailUploadError: null | AxiosError;
  thumnailUploadLoading: boolean;

  thumnailURL: string;

  posts: Post[];
  post: Post;
}
