import axios from "axios";

export const getRecommentsAPI = (comment_id: string) => {
  return axios.get(`/recomment/${comment_id}`);
};
