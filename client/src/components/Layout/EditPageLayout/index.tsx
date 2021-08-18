import { FC } from "react";
import { EditPageContainer } from "./styles";

const EditPageLayout: FC = ({ children }) => {
  return <EditPageContainer>{children}</EditPageContainer>;
};

export default EditPageLayout;
