import axios from "axios";

export const getPostsAPI = () => {
  return axios.get(`/post`);
};
