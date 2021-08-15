import axios from "axios";

export const deletePostAPI = (post_id: string) => {
  return axios.delete(`/post/${post_id}`);
};
