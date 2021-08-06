import axios from "axios";

export interface ILoadMyInfoProps {
  token: string;
}

export const loadMyInfoAPI = (token: ILoadMyInfoProps) => {
  return axios.post(`/auth/me`, {
    token,
  });
};
