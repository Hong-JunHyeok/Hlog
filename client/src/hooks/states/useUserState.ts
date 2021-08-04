import { useTypedSelector } from "../../modules";

export const useUserState = () => {
  const { loginDone, loginError, loginLoading, me } = useTypedSelector(
    (state) => state.user,
  );

  return { loginDone, loginError, loginLoading, me };
};
