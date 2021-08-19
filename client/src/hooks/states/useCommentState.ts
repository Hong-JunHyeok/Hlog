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
    deleteCommentDone,
    deleteCommentError,
    deleteCommentLoading,
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
