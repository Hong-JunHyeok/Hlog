import { useTypedSelector } from "../../modules";

export const useCommentState = () => {
  const { comments, getCommentsDone, getCommentsError, getCommentsLoading } =
    useTypedSelector((state) => state.comment);

  return { comments, getCommentsDone, getCommentsError, getCommentsLoading };
};
