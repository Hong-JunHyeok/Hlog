import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { loginAsyncAction, logOutAction } from "../../modules/user/actions";
import { ILoginData } from "../../utils/api/auth/loginAPI";

export const useUserDispatch = () => {
  const dispatch = useDispatch();

  const dispatchLogIn = useCallback((loginData: ILoginData) => {
    dispatch(loginAsyncAction.request(loginData));
  }, []);

  const dispatchLogOut = useCallback(() => {
    dispatch(logOutAction());
  }, []);

  return {
    dispatchLogIn,
    dispatchLogOut,
  };
};
