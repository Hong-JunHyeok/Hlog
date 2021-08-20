import { useTypedSelector } from "../../modules";

export const useRecommentState = () => {
  const {
    createRecommentDone,
    createRecommentError,
    createRecommentLoading,
    recomments,
  } = useTypedSelector((state) => state.recomment);

  return {
    createRecommentDone,
    createRecommentError,
    createRecommentLoading,
    recomments,
  };
};
