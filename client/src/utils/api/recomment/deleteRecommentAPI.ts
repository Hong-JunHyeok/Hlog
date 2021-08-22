import axios from "axios";

export const deleteRecommentAPI = (recomment_id: string) => {
  return axios.delete(`/recomment/${recomment_id}`);
};
