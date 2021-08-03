import { FC } from "react";
import { AuthLayoutContainer } from "./styles";

const AuthLayout: FC = ({ children }) => {
  return <AuthLayoutContainer>{children}</AuthLayoutContainer>;
};

export default AuthLayout;
