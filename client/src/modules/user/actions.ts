import { createAction } from "typesafe-actions";

export const LOG_IN = "LOG_IN" as const;
export const LOG_OUT = "LOG_OUT" as const;

export const logInAction = createAction(LOG_IN)();
export const logOutAction = createAction(LOG_OUT)();
