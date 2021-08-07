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
    loadMyInfoDone,
    loadMyInfoError,
    loadMyInfoLoading,
    logoutDone,
    logoutError,
    logoutLoading,
  } = useTypedSelector((state) => state.user);

  return {
    loginDone,
    loginError,
    loginLoading,
    me,
    joinDone,
    joinError,
    joinLoading,
    loadMyInfoDone,
    loadMyInfoError,
    loadMyInfoLoading,
    logoutDone,
    logoutError,
    logoutLoading,
  };
};
