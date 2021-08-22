import { useTypedSelector } from "../../modules";

export const useRecommentState = () => {
  const {
    createRecommentDone,
    createRecommentError,
    createRecommentLoading,
    getRecommentsDone,
    getRecommentsError,
    getRecommentsLoading,
    recomments,
  } = useTypedSelector((state) => state.recomment);

  return {
    createRecommentDone,
    createRecommentError,
    createRecommentLoading,
    recomments,
  };
};
