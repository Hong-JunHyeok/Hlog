import axios from "axios";

export const getCommentsAPI = (post_id: string) => {
  return axios.get(`/comment/${post_id}`);
};
