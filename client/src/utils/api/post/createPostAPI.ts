import axios from "axios";

export interface ICreatePostData {
  title: string;
  content: string;
  thumnail: string;
}

export const createPostAPI = (createPostData: ICreatePostData) => {
  return axios.post(`/post`, createPostData);
};
