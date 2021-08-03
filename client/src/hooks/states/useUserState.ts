import { useTypedSelector } from "../../modules";

export const useUserState = () => {
  const { isLoggedIn } = useTypedSelector((state) => state.user);

  return { isLoggedIn };
};
