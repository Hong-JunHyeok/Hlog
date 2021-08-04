import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { loginAsyncAction, logOutAction } from "../../modules/user/actions";

export const useUserDispatch = () => {
  const dispatch = useDispatch();

  const dispatchLogIn = useCallback(() => {
    dispatch(loginAsyncAction.request());
  }, []);

  const dispatchLogOut = useCallback(() => {
    dispatch(logOutAction());
  }, []);

  return {
    dispatchLogIn,
    dispatchLogOut,
  };
};
