import axios from "axios";

interface IParams {
  comment_id: string;
}

export const deleteCommentAPI = (comment_id: string) => {
  return axios.delete(`/comment/${comment_id}`);
};
