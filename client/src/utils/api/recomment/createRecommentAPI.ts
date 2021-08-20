import axios from "axios";

interface IParams {
  comment_id: string;
  content: string;
}

export const createRecommentAPI = ({ comment_id, content }: IParams) => {
  return axios.post(`/recomment/${comment_id}`, {
    content,
  });
};
