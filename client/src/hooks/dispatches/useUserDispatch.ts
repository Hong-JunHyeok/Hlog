import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { logInAction, logOutAction } from "../../modules/user/actions";

export const useUserDispatch = () => {
  const dispatch = useDispatch();

  const dispatchLogIn = useCallback(() => {
    dispatch(logInAction());
  }, []);

  const dispatchLogOut = useCallback(() => {
    dispatch(logOutAction());
  }, []);

  return {
    dispatchLogIn,
    dispatchLogOut,
  };
};
