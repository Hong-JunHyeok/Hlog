import axios from "axios";

export const getPostAPI = (post_id: string) => {
  return axios.get(`/post/${post_id}`);
};
