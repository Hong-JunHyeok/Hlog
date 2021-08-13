import axios from "axios";

export const getMyPostsAPI = () => {
  return axios.get(`/post/my`);
};
