import axios from "axios";

interface IParams {
  post_id: string;
  content: string;
}

export const createCommentAPI = ({ post_id, content }: IParams) => {
  return axios.post(`/comment/${post_id}`, {
    content,
  });
};
