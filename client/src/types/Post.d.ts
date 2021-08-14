import { Comment } from "./Comment";

export interface Post {
  userId: string;
  post_id: string;
  title: string;
  content: string;
  comments: string[];
  author: string;
  createdAt: string;
  likes: string[];
  thumnail: string;
}
