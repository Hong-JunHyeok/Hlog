import axios from "axios";

export const getUserPostsAPI = (userIdx: string) => {
  return axios.get(`/post/userPosts/${userIdx}`);
};
