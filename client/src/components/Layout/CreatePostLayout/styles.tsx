import styled from "@emotion/styled";
import { colorsModule } from "../../../styles/colors";

export const StyledCreatePageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${colorsModule.hlog_gray_3};
  display: flex;
  & > div {
    flex: 1 1 0%;
  }
`;
