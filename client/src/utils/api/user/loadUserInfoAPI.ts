import axios from "axios";

export const loadUserInfoAPI = (userIdx: string) => {
  return axios.get(`/auth/user/${userIdx}`);
};
