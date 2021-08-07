import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  joinAsyncAction,
  loadMyInfoAction,
  loginAsyncAction,
  logoutAsyncAction,
} from "../../modules/user/actions";
import { IJoinData } from "../../utils/api/auth/joinAPI";
import { ILoginData } from "../../utils/api/auth/loginAPI";

export const useUserDispatch = () => {
  const dispatch = useDispatch();

  const dispatchLogIn = useCallback(
    (loginData: ILoginData) => {
      dispatch(loginAsyncAction.request(loginData));
    },
    [dispatch],
  );

  const dispatchJoin = useCallback(
    (joinData: IJoinData) => {
      dispatch(joinAsyncAction.request(joinData));
    },
    [dispatch],
  );

  const dispatchLoadMyInfo = useCallback(() => {
    dispatch(loadMyInfoAction.request());
  }, [dispatch]);

  const dispatchLogout = useCallback(() => {
    dispatch(logoutAsyncAction.request());
  }, [dispatch]);

  return {
    dispatchLogIn,
    dispatchJoin,
    dispatchLoadMyInfo,
    dispatchLogout,
  };
};
