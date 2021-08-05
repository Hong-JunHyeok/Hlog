import axios from "axios";

export interface IJoinData {
  id: string;
  pw: string;
  name: string;
  desc: string;
}

export const joinAPI = (joinData: IJoinData) => {
  return axios.post(`/auth/join`, joinData);
};
