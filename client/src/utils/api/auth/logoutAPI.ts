import axios from "axios";

export const logoutAPI = () => {
  return axios.post("/auth/logout");
};
