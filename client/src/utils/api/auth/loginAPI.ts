import axios from "axios";

export interface ILoginData {
  id: string;
  pw: string;
}

export const loginAPI = (loginData: ILoginData) => {
  return axios.post(`/auth/login`, loginData);
};
