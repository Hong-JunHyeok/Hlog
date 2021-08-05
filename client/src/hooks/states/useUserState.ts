import { useTypedSelector } from "../../modules";

export const useUserState = () => {
  const {
    loginDone,
    loginError,
    loginLoading,
    me,
    joinDone,
    joinError,
    joinLoading,
  } = useTypedSelector((state) => state.user);

  return {
    loginDone,
    loginError,
    loginLoading,
    me,
    joinDone,
    joinError,
    joinLoading,
  };
};
