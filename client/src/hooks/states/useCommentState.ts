import { useTypedSelector } from "../../modules";

export const useCommentState = () => {
  const {
    comments,
    getCommentsDone,
    getCommentsError,
    getCommentsLoading,
    createCommentDone,
    createCommentError,
    createCommentLoading,
  } = useTypedSelector((state) => state.comment);

  return {
    comments,
    getCommentsDone,
    getCommentsError,
    getCommentsLoading,
    createCommentDone,
    createCommentError,
    createCommentLoading,
  };
};
