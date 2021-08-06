import axios from "axios";

export const loadMyInfoAPI = () => {
  return axios.get(`/auth/user`);
};
