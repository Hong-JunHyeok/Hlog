import { FC } from "react";
import { StyledViewContainer } from "./styles";

interface IProps {}

const ViewPostLayout: FC<IProps> = ({ children }) => {
  return <StyledViewContainer>{children}</StyledViewContainer>;
};

export default ViewPostLayout;
