import { useTypedSelector } from "../../modules";

export const useUserState = () => {
  const { loginDone, loginError, loginLoading } = useTypedSelector(
    (state) => state.user,
  );

  return { loginDone, loginError, loginLoading };
};
