import axios from "axios";

export const thumnailUploadAPI = (data: FormData) => {
  return axios.post(`/post/thumnail`, data);
};
